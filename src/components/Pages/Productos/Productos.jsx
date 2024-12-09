import React, { useState } from 'react';
import ItemList from '../../ItemList/ItemList';
import Category from '../../Category/Category'; 

function Productos() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <div className='bg-slate-200 py-10 px-4 sm:px-6 md:px-8'>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-slate-900 font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8'>
                    REVISA NUESTROS PRODUCTOS
                </h1>
                
                {/*pasamos el prop a las categorys */}
                <Category 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                />

                {/*pasamos el estado seleccionado al itemlist */}
                <ItemList itemType={selectedCategory} />
            </div>
        </div>
    );
}
export default Productos;
