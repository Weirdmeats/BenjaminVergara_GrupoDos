import React, { useState } from 'react';
import ItemList from '../../ItemList/ItemList';
import Category from '../../Category/Category'; // Importamos el componente Category

function Productos() {
    const [selectedCategory, setSelectedCategory] = useState('all'); // Estado para la categoría seleccionada

    return (
        <div className='bg-slate-200 py-10 px-4'>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-slate-900 font-bold text-2xl text-center mb-8'>REVISA NUESTROS PRODUCTOS</h1>
                
                {/* Pasamos los props a Category */}
                <Category 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                />

                {/* Pasamos el estado seleccionado al ItemList */}
                <ItemList itemType={selectedCategory} />
            </div>
        </div>
    );
}

export default Productos;
