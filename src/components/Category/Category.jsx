import React from 'react';

function Category({ selectedCategory, setSelectedCategory }) {
    return (
        <div className="flex justify-center mb-8">
            {['all', 'celulares', 'powerbanks', 'cargadores'].map(category => (
                <button
                    key={category}
                    className={`px-4 py-2 mx-2 rounded transition duration-300 ${selectedCategory === category ? 'bg-slate-600 text-white' : 'bg-white text-slate-600 border border-slate-600 hover:bg-slate-100'}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
        </div>
    );
}

export default Category;
