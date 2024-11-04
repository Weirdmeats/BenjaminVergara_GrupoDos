import React from 'react';
import { useShoppingCart } from '../../../components/ShoppingCart/ShoppingCartContext';

// Componente para visualizar el carrito de compras
const Cart = () => {
    const { state } = useShoppingCart(); 

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Carrito de Compras</h1>
            {/* Verifica si el carrito está vacío */}
            {state.cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {/* Muestra la lista de productos en el carrito */}
                    {state.cart.map((item, index) => (
                        <li key={index} className="flex justify-between border-b py-2">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>${item.price * item.quantity}</span> 
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
