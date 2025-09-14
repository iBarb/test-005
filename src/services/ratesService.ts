// Modo ENVIAR (dado lo que envías, calculas lo que recibes)
export const calcularDolaresRecibidos = (solesEnviados: number, salePrice: number) =>
    solesEnviados / salePrice;

export const calcularSolesRecibidos = (dolaresEnviados: number, purchasePrice: number) =>
    dolaresEnviados * purchasePrice;


// Modo RECIBIR (dado lo que quieres recibir, calculas lo que debes enviar)
export const calcularSolesNecesarios = (dolaresARecibir: number, salePrice: number) =>
    dolaresARecibir * salePrice;

export const calcularDolaresNecesarios = (solesARecibir: number, purchasePrice: number) =>
    solesARecibir / purchasePrice;


export const formatearMoneda = (monto: number, decimales: number = 2) =>
    monto.toLocaleString("en-US", {
        minimumFractionDigits: decimales,
        maximumFractionDigits: decimales,
    });

export type Currency = "USD" | "PEN";

export const currencyPrefix: Record<Currency, string> = {
    USD: "$",
    PEN: "S/",
};

export const currencyFlag: Record<Currency, string> = {
    USD: "fi fi-us",
    PEN: "fi fi-pe",
};