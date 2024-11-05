import React from 'react';
import { useShoppingCart } from '../../../components/ShoppingCart/ShoppingCartContext';

// Componente para visualizar el carrito de compras
const Cart = () => {
    const { state } = useShoppingCart(); 

    return (
        <div className="bg-slate-200 py-10 px-4">
            <h1 className="text-2xl font-bold">Carrito de Compras</h1>
            {/*verifica si el carrito esta vacío */}
            {state.cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {/*muestra la lista de productos en el carrito */}
                    {state.cart.map((item, index) => (
                        <li key={index} className="flex justify-between border-b py-2">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>${item.price * item.quantity}</span> 
                        </li>
                    ))}
                    
                </ul>
                
            )}
             <button className='bg-yellow-500 px-4 py-3 rounded-lg'>PAGAR COMPRA</button>
        </div>
    );
};

export default Cart;
