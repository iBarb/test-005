import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import CurrencyInput from "./CurrencyInput";
import { ArrowDownUp } from "lucide-react";
import { calcularDolaresNecesarios, calcularDolaresRecibidos, calcularSolesNecesarios, calcularSolesRecibidos } from "../../services/ratesService";

const Cotizador: React.FC = () => {
  const { purchase_price, sale_price, loading } = useAppSelector(
    (state) => state.rates
  );
  const [monto, setMonto] = useState<number>(1);
  const [resultado, setResultado] = useState<number>(1);
  const [esSolesADolares, setEsSolesADolares] = useState<boolean>(false);

  useEffect(() => {

    const nuevoResultado = esSolesADolares
      ? calcularDolaresRecibidos(monto, sale_price)
      : calcularSolesRecibidos(monto, purchase_price);
    console.log("useEffect) nuevoResultado: ", nuevoResultado);
    setResultado(nuevoResultado);

  }, [monto, loading, esSolesADolares]);

  const onChangeResult = (value: number) => {
    const nuevoMonto = esSolesADolares
      ? calcularSolesNecesarios(value, sale_price)
      : calcularDolaresNecesarios(value, purchase_price);
    console.log("onChangeResult) nuevoMonto: ", nuevoMonto);

    setMonto(nuevoMonto);
  }


  const handleSwitch = () => {
    setEsSolesADolares((prev) => !prev);
  };

  if (loading) return <p>Cargando tasas...</p>;

  return (
    <div className="max-w-md mx-auto rounded-3xl shadow w-full bg-white p-6">
      {/* <h2>Cotizador</h2>
      <p>
        Compra: {purchase_price} | Venta: {sale_price}
      </p> */}
      <div className="bg-indigo-100 p-1 rounded-2xl flex mb-8 mt-4 cursor-pointer">
        <div
          className={`w-1/2 text-center p-3 rounded-xl ${esSolesADolares ? "" : "bg-white"}`}
          onClick={() => setEsSolesADolares(false)}
        >
          Compra: S/{purchase_price
          }</div>
        <div
          className={`w-1/2 text-center p-3 rounded-xl ${!esSolesADolares ? "" : "bg-white"}`}
          onClick={() => setEsSolesADolares(true)}
        >
          Venta: S/ {sale_price}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <CurrencyInput
          currency={!esSolesADolares ? "USD" : "PEN"}
          label={"Envia"}
          value={monto}
          onChange={(value) => setMonto(value)}
        />

        <div className="flex items-center justify-center relative">
          <button className="flex items-center p-2 bg-indigo-800 text-white rounded-full absolute cursor-pointer" onClick={handleSwitch}>
            <ArrowDownUp className={`w-5 h-5 transition-transform duration-300 ease-in-out ${esSolesADolares ? "rotate-180" : "rotate-0"}`} />
          </button>
        </div>

        <CurrencyInput
          currency={esSolesADolares ? "USD" : "PEN"}
          label={"Recibe"}
          value={resultado}
          onChange={(value) => onChangeResult(value)}
        />
      </div>

      <button className="w-full mt-8 bg-indigo-800 text-white py-3 rounded-xl font-semibold hover:bg-indigo-900 transition-colors">
        Iniciar operación
      </button>

      {/* <p>
        Resultado: <strong>{resultado.toFixed(2)}</strong>
      </p> */}
    </div>
  );
};

export default Cotizador;
