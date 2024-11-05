import React from 'react';
import { Link } from "react-router-dom";

function ItemServices({ id, name, price, img }) {
    return (
        //mostrar los detalles de un servicio
        <div className="flex flex-col items-center mx-4 my-6 p-4 bg-[#f0f0f0] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img src={img} alt="Imagen de Servicio" className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold my-3 tracking-wide capitalize text-[#1e293b] hover:text-[#00ffff] text-center">{name}</h3>
            <h4 className="text-md sm:text-lg md:text-xl font-medium mb-4 text-[#4b5563]">${price}</h4>
            <Link to={`/services/${id}`}>
                <button className="bg-slate-300 text-sm sm:text-base md:text-lg py-2 px-4 rounded-lg hover:bg-slate-400" type="button">COMPRAR</button>
            </Link>
        </div>
    );
}

export default ItemServices;
