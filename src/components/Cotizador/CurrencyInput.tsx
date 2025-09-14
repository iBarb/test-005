import React, { useEffect, useRef, useState } from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { currencyFlag, currencyPrefix, formatearMoneda, type Currency } from '../../services/ratesService';
import { formatearNumero } from '../../utils/ormatCurrency';

interface CurrencyInputProps {
    currency: Currency;
    label: string;
    value: number;
    onChange: (value: number) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ currency, label, value, onChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value.toString());
    const containerRef = useRef<HTMLDivElement>(null);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isEditing) {
            setTempValue(value.toString());
        }
    }, [value, isEditing]);


    // Detectar click fuera del div
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                if (isEditing) {
                    setIsEditing(false);

                    if (debounceRef.current) { // Si hay un debounce pendiente, cancelar y ejecutar inmediatamente
                        clearTimeout(debounceRef.current);
                        debounceRef.current = null;

                        if (tempValue !== "" && !isNaN(Number(tempValue))) {
                            onChange(Number(tempValue));
                        } else {
                            onChange(0); // valor por defecto si es inválido o vacío
                        }
                    }

                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isEditing, tempValue, onChange]);

    const focusInput = () => {
        setIsEditing(true);
        queueMicrotask(() => {
            inputRef.current?.select();
        });

    }
    const handleChange = (newValue: string) => {
        // Solo permitir números enteros o decimales con punto
        const regex = /^\d*\.?\d*$/;

        if (regex.test(newValue)) {
            setTempValue(newValue);

            // Limpiar debounce anterior
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }

            // Nuevo debounce (500ms por ejemplo)
            debounceRef.current = setTimeout(() => {
                if (newValue !== "" && !isNaN(Number(newValue))) {
                    onChange(Number(newValue));
                }
            }, 800);
        }
    };

    return (
        <div className='flex rounded-lg border-purple-900 border py-2.5 px-3.5 cursor-text text-indigo-950' onClick={focusInput} ref={containerRef}>
            {/* Input left */}
            <div className='flex flex-col gap-1'>
                <div>
                    <span className='block text-xs font-medium text-gray-500'>{label}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className={`${currencyFlag[currency]} rounded-sm`}></span>
                    <span className='font-bold text-lg'>{currency}</span>
                </div>
            </div>

            {/* Input right */}
            <div className='flex items-end justify-end w-full font-bold text-lg gap-2'>
                {isEditing ? (
                    <input
                        type="text"
                        ref={inputRef}
                        autoFocus
                        value={formatearNumero(tempValue)}
                        // value={tempValue}
                        onChange={(e) => handleChange(e.target.value)}
                        className="outline-none w-24 text-right"
                    />
                ) : (
                    <>
                        <span>{currencyPrefix[currency]}</span>
                        <span>{formatearMoneda(value)}</span>
                    </>
                )}

            </div>
        </div>
    );
};

export default CurrencyInput;