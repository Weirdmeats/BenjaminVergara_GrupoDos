import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">ENTEL-PCS</div>
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-white hover:text-gray-300">Inicio</Link>
                    <Link to="/productos" className="text-white hover:text-gray-300">Productos</Link>
                    <Link to="/servicios" className="text-white hover:text-gray-300">Servicios</Link>
                    <Link to="/contactos" className="text-white hover:text-gray-300">Contactos</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
