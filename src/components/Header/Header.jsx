import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Ícono del carrito
import { useCarrito } from '../Store/Store';

function Header() {
    const { totalItems } = useCarrito();

    return (
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">ENTEL-PCS</div>
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-white hover:text-gray-300">Inicio</Link>
                    <Link to="/productos" className="text-white hover:text-gray-300">Productos</Link>
                    <Link to="/servicios" className="text-white hover:text-gray-300">Servicios</Link>
                    <Link to="/contactos" className="text-white hover:text-gray-300">Contactos</Link>
                    <Link to="/carrito" className="relative text-white hover:text-gray-300 flex items-center">
                        {/* Ícono del carrito */}
                        <AiOutlineShoppingCart className="w-6 h-6" />
                        {/* Badge del total de items */}
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
