import React, { useState } from 'react';
import ItemList from '../../ItemList/ItemList';

function Productos() {
    //estado para la categoría
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <div className='bg-slate-200 py-10 px-4 md:px-6 lg:px-8'>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-slate-900 font-bold text-2xl md:text-3xl text-center mb-8'>REVISA NUESTROS PRODUCTOS</h1>
                
                {/* Botones de categoría */}
                <div className="flex justify-center mb-8 space-x-4">
                    <button
                        className={`px-4 py-2 rounded ${selectedCategory === 'all' ? 'bg-slate-600 text-white' : 'bg-white text-slate-600 border border-slate-600'}`}
                        onClick={() => setSelectedCategory('all')}
                    >
                        Todos
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${selectedCategory === 'celulares' ? 'bg-slate-600 text-white' : 'bg-white text-slate-600 border border-slate-600'}`}
                        onClick={() => setSelectedCategory('celulares')}
                    >
                        Celulares
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${selectedCategory === 'powerbanks' ? 'bg-slate-600 text-white' : 'bg-white text-slate-600 border border-slate-600'}`}
                        onClick={() => setSelectedCategory('powerbanks')}
                    >
                        Powerbanks
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${selectedCategory === 'cargadores' ? 'bg-slate-600 text-white' : 'bg-white text-slate-600 border border-slate-600'}`}
                        onClick={() => setSelectedCategory('cargadores')}
                    >
                        Cargadores
                    </button>
                </div>

                {/* Componente de lista de ítems */}
                <ItemList itemType={selectedCategory} />
            </div>
        </div>
    );
}

export default Productos;
