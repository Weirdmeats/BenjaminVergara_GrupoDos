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
            //se verifica entre servicios y productos
            if (itemType === 'services') {
                fetchedItems = await getServices();
            } else if (itemType === 'all') {
                fetchedItems = await getProducts();
            } else {
                //se filtra por categoria
                fetchedItems = await getProducts(); 
                fetchedItems = fetchedItems.filter(product => product.category === itemType);
            }
            setItems(fetchedItems);
            setLoading(false);
        };
        fetchItems();
    }, [itemType]); 
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-center gap-4">
                {items.map(item => (//mapea el id especifico del producto o servicio
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
