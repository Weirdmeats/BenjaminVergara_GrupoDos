import React from 'react';

function Inicio() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/*fondo de la imagen*/}
      <img
        src="https://entel.cdn.modyo.com/uploads/ca8863c3-dee6-4bcd-aa01-82bfcba7b651/original/bg-desk.png"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      
      
      <div className="absolute inset-0 bg-black opacity-40"></div>

     
      <div className="relative z-10 text-center p-4">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2">
          BIENVENIDO
        </h1>
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          PAGINA PRINCIPAL ENTELPCS
        </h1>
      </div>
    </div>
  );
}

export default Inicio;
