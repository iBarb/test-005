import React from 'react';
import Cotizador from '../components/Cotizador/Cotizador';

interface ExchangeProps {

}

const Exchange: React.FC<ExchangeProps> = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center p-4">
            <div className='relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 p-0 md:px-10'>
                <section className='flex flex-col items-start max-[1281px]:items-center min-[480px]:mt-6'>
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1]">
                            El mejor
                            <br />
                            <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                                tipo de cambio
                            </span>
                        </h1>
                        <p className="text-2xl text-purple-100 mb-8 leading-[1.2]">
                            para cambiar dólares y soles
                            <br />
                            online en Perú
                        </p>
                    </div>
                </section>
                <div className='flex-shrink-0 w-full max-w-md'>
                    <Cotizador />
                </div>
            </div>
        </div>
    );
};

export default Exchange;
