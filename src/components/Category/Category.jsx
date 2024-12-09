import React from 'react';

function Category({ selectedCategory, setSelectedCategory }) {
    return (
        <div className="flex flex-wrap justify-center mb-8 ">
            {['all', 'celulares', 'powerbanks', 'cargadores'].map(category => (//categorias
                <button
                    key={category}
                    className={`px-4 py-4 mx-2 rounded transition duration-300 ${
                        selectedCategory === category
                            ? 'bg-slate-600 text-white': 'bg-white text-slate-600 border border-slate-600 hover:bg-slate-100' } sm:px-6 sm:py-3 sm:mx-3 md:px-8 md:py-2 md:mx-2`}
                    onClick={() => setSelectedCategory(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}
                </button>//primera letra en mayuscula
            ))}
        </div>
    );
}

export default Category;
