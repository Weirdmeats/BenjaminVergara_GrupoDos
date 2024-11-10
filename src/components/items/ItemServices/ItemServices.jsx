import React from 'react';
import { Link } from "react-router-dom";

function ItemServices({ id, name, price, img }) {
    return (
        <div className="flex flex-col items-center mx-4 my-6 p-4 bg-[#f0f0f0] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 max-w-xs sm:max-w-sm">
            <img src={img} alt="Imagen de Servicio" className="w-32 h-32 sm:w-36 rounded-full" />
            <h3 className="text-lg sm:text-xl font-semibold my-3 tracking-wide capitalize text-[#1e293b] text-center">{name}</h3>
            <h4 className="text-md sm:text-lg font-medium mb-4 text-[#4b5563]">${price}</h4>
            <Link to={`/services/${id}`}>
                <button className="bg-slate-300 text-sm py-2 px-4 rounded-lg hover:bg-slate-400">COMPRAR</button>
            </Link>
        </div>
    );
}

export default ItemServices;
