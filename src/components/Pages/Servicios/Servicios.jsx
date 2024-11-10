import React from 'react';
import ItemList from '../../ItemList/ItemList';

function Servicios() {
    return (
        <div className='bg-slate-200 py-10 px-4'>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-slate-900 font-bold text-2xl text-center mb-8'>
                    REVISA NUESTROS SERVICIOS
                </h1>
                <ItemList itemType="services" /> 
            </div>
        </div>
    );
}

export default Servicios;
