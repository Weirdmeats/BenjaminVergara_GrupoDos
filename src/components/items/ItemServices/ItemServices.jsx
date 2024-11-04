
import React from 'react';
import { Link } from "react-router-dom";

function ItemServices({ id, name, price, img }) {
    return (
        //mostrar los detalles de un servicio
        <div className="flex flex-col items-center mx-4 my-[25px] p-[15px] bg-[#f0f0f0] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={img} alt="Imagen de Servicio" className="w-[150px] h-[150px]" />
            <h3 className="text-[24px] font-semibold my-[10px] tracking-[1px] capitalize text-[#1e293b] hover:text-[#00ffff]">{name}</h3>
            <h4 className="text-[20px] font-medium mb-[15px] text-[#4b5563]">$  {price}</h4>
            <Link to={`/services/${id}`}>
                <button className="bg-slate-300 py-3 px-3 rounded-lg" type="button">COMPRAR</button>
            </Link>
        </div>
    );
}

export default ItemServices;
