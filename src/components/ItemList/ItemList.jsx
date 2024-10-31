

import React, { useEffect, useState } from 'react';
import { getProducts, getServices } from '../../data/asyncMock'; 
import ItemProducts from '../items/ItemProducts/ItemProducts'; 
import ItemServices from '../items/ItemServices/ItemServices'; 

function ItemList({ itemType }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            if (itemType === 'products') {
                const products = await getProducts();
                setItems(products);
            } else if (itemType === 'services') {
                const services = await getServices();
                setItems(services);
            }
        };

        fetchItems();
    }, [itemType]);

    return (
        <div className="flex flex-wrap justify-center">
            {items.map(item => (
                itemType === 'products' ? (
                    <ItemProducts key={item.id} {...item} />
                ) : (
                    <ItemServices key={item.id} {...item} />
                )
            ))}
        </div>
    );
}

export default ItemList;
