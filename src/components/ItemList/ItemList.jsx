import React, { useEffect, useState } from 'react';
import { getProducts, getServices } from '../../data/asyncMock';
import ItemProducts from '../items/ItemProducts/ItemProducts';
import ItemServices from '../items/ItemServices/ItemServices';
import Loading from '../Loading/Loading';

function ItemList({ itemType }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            let fetchedItems;

            // Verifica el tipo de item (productos o servicios) y filtra por categoría
            if (itemType === 'services') {
                fetchedItems = await getServices();
            } else if (itemType === 'all') {
                fetchedItems = await getProducts();
            } else {
                // Filtra productos por categoría específica
                fetchedItems = await getProducts(); 
                fetchedItems = fetchedItems.filter(product => product.category === itemType);
            }

            setItems(fetchedItems);
            setLoading(false);
        };
        fetchItems();
    }, [itemType]); // Se vuelve a ejecutar cada vez que cambia la categoría

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-center gap-4">
                {items.map(item => (
                    itemType === 'services' ? (
                        <ItemServices key={item.id} {...item} />
                    ) : (
                        <ItemProducts key={item.id} {...item} />
                    )
                ))}
            </div>
        </div>
    );
}

export default ItemList;
