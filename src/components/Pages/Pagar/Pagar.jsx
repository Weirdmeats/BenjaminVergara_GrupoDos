import React from 'react';
import { useCarrito } from '../../Store/Store'; 

function Pagar() {
  const { total } = useCarrito();//desde store
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 py-10">
      <h1 className="text-3xl font-bold mb-6">Formulario de Pago</h1>
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <input //nombre
          type="text"
          placeholder="Nombre"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <input //email
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <select className="w-full p-3 mb-4 border border-gray-300 rounded-lg">
          <option value="banco1">Banco de Chile</option>
          <option value="banco2">Banco Santander</option>
          <option value="banco3">Banco Estado</option>
          <option value="banco4">Scotiabank</option>
        </select>
        <input //bancos
          type="text" 
          placeholder="Numero de tarjeta"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="MM"
            className="w-1/2 p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="AA"
            className="w-1/2 p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <input
          type="text"
          placeholder="CVV"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        {/*total del store para pagar*/}
        <p className="text-xl font-semibold text-center mb-4">Total a pagar: ${total}</p>

        <button
          type="submit"
          className="w-full py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700"
          onClick={() => alert('Número de tarjeta inválida')}
        >
          Pagar
        </button>
      </form>
    </div>
  );
}
export default Pagar;
