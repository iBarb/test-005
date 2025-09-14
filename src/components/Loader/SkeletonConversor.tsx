import React from 'react';

interface SkeletonConversorProps {

}

const SkeletonConversor: React.FC<SkeletonConversorProps> = () => {
  return (
    <div className="animate-pulse">
      {/* Switch Compra/Venta */}
      <div className="bg-indigo-100 p-1 rounded-2xl flex mb-8 mt-4">
        <div className="w-1/2 h-13 bg-white rounded-xl"></div>
        <div className="w-1/2 h-13 rounded-xl ml-1"></div>
      </div>

      {/* Inputs y switch */}
      <div className="flex flex-col gap-1.5">
        {/* Input Envia */}
        <div className="h-18 bg-gray-200 rounded-xl"></div>

        {/* Switch botón */}
        <div className="flex items-center justify-center relative">
          <div className="w-10 h-10 bg-indigo-300 rounded-full absolute"></div>
        </div>

        {/* Input Recibe */}
        <div className="h-18 bg-gray-200 rounded-xl"></div>
      </div>

      {/* Botón principal */}
      <div className="w-full mt-8 h-12 bg-indigo-300 rounded-xl"></div>
    </div>
  );
};

export default SkeletonConversor;