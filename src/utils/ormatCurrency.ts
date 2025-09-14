export const formatearNumero = (valor: string): string => {
  // Permitir mientras el usuario escribe un punto al final o un decimal incompleto
  if (valor.endsWith(".")) {
    return valor;
  }

  if (/^\d+\.\d{0,2}$/.test(valor)) {
    return valor; // ya es válido con hasta 2 decimales
  }

  const num = Number(valor);

  if (isNaN(num)) {
    return "0";
  }

  if (Number.isInteger(num)) {
    return num.toString();
  }

  return num.toFixed(2);
};