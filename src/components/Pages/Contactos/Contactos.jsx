import React from 'react';
import Footer from '../../Footer/Footer';

function Contactos() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 py-10">
      <h1 className="text-3xl font-bold mb-4">Contactanos</h1>
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <input 
          type="text" 
          placeholder="Nombre"
          className="w-full p-3 mb-4 border border-gray-300 "
        />
        <input 
          type="email" 
          placeholder="Correo electronico"
          className="w-full p-3 mb-4 border border-gray-300 "
        />
        <textarea 
          placeholder="Mensaje"
          rows="4"
          className="w-full p-3 mb-4 border border-gray-300 "
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white"
          onClick={() => alert('Mensaje enviado correctamente')}
        >
          Enviar
          
          
        </button >
      </form>

      <Footer />
    </div>
  );
}

export default Contactos;
