'use client';
import React, { useState } from "react";
import { words } from "../../data/data"; 
import { Link } from "react-router-dom";
import { useShoppingCart } from "../ShoppingCart/ShoppingCartContext"; 

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        const query = e.target.value;
        if (query === '') {
            setSearchResults([]);
        } else {
            setSearchResults(words.filter(word => word.toLowerCase().includes(query.toLowerCase())).slice(0, 8));
        }
    };

    // Usamos el contexto del carrito para obtener el número de elementos
    const { state } = useShoppingCart();

    return (
        <nav className="bg-gray-900 p-2 relative">
            <div className="container mx-auto flex items-center justify-between flex-wrap">
                <div className="text-white text-2xl md:text-3xl lg:text-2xl font-bold mb-2 md:mb-0">ENTEL-PCS</div>
                <form className="w-full md:w-1/2 lg:w-1/3 relative mb-4 md:mb-0">
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Buscar"
                            className="w-full p-3 rounded-full bg-slate-800 text-white text-base md:text-lg lg:text-xl"
                            onChange={handleSearch}
                        />
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-900 rounded-full">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="16.65" y1="16.65" x2="21" y2="21" />
                            </svg>
                        </button>
                    </div>
                    {searchResults.length > 0 && (
                        <div className="absolute top-full mt-2 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 shadow-lg">
                            {searchResults.map((result, index) => (
                                <span key={index} className="hover:bg-slate-700 p-2 rounded cursor-pointer">{result}</span>
                            ))}
                        </div>
                    )}
                </form>
                <div className="md:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden md:flex items-center space-x-6 text-sm md:text-base lg:text-lg font-bold">
                    <li><Link to="/" className="text-white hover:text-gray-300">Inicio</Link></li>
                    <li><Link to="/productos" className="text-white hover:text-gray-300">Productos</Link></li>
                    <li><Link to="/servicios" className="text-white hover:text-gray-300">Servicios</Link></li>
                    <li><Link to="/contactos" className="text-white hover:text-gray-300">Contactos</Link></li>
                </ul>
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/cart" className="relative text-white">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M1 1h4l1.68 9.29a2 2 0 0 0 1.96 1.71h11.88a2 2 0 0 0 1.96-1.71L23 6H6"></path>
                            <circle cx="9" cy="20" r="2"></circle>
                            <circle cx="16" cy="20" r="2"></circle>
                        </svg>
                        <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1">{state.cart.length}</span>
                    </Link>
                </div>
            </div>
            {isMenuOpen && (
                <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-white p-3">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-8 h-8"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col p-4 space-y-4">
                        <li><Link to="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>Inicio</Link></li>
                        <li><Link to="/productos" className="text-white hover:text-gray-300" onClick={toggleMenu}>Productos</Link></li>
                        <li><Link to="/servicios" className="text-white hover:text-gray-300" onClick={toggleMenu}>Servicios</Link></li>
                        <li><Link to="/contactos" className="text-white hover:text-gray-300" onClick={toggleMenu}>Contactos</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Header;
