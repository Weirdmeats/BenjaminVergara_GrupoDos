import React, { useEffect, useState } from 'react';
import { getProducts, getServices } from '../../data/asyncMock'; 
import ItemProducts from '../items/ItemProducts/ItemProducts'; 
import ItemServices from '../items/ItemServices/ItemServices'; 
import Loading from '../Loading/Loading'; 
//estado de uso
function ItemList({ itemType }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //empezar el loading
        const fetchItems = async () => {
            setLoading(true); 
            
            //obtener productos o servicios según el tipo
            let fetchedItems;
            if (itemType === 'services') {
                fetchedItems = await getServices();
            } else {
                fetchedItems = await getProducts(); 
            }

            //filtrar items según la categoría seleccionada
            if (itemType === 'celulares') {
                const filteredCelulares = fetchedItems.filter(item => item.category === 'celulares');
                setItems(filteredCelulares);
            } else if (itemType === 'powerbanks') {
                const filteredPowerbanks = fetchedItems.filter(item => item.category === 'powerbanks');
                setItems(filteredPowerbanks);
            } else if (itemType === 'cargadores') {
                const filteredCargadores = fetchedItems.filter(item => item.category === 'cargadores');
                setItems(filteredCargadores);
            } else if (itemType === 'internet_satelital') {
                const filteredInternetSatelital = fetchedItems.filter(item => item.category === 'internet_satelital');
                setItems(filteredInternetSatelital);
            } else if (itemType === 'fibra_optica') {
                const filteredFibraOptica = fetchedItems.filter(item => item.category === 'fibra_optica');
                setItems(filteredFibraOptica);
            } else if (itemType === 'paquete') {
                const filteredPaquete = fetchedItems.filter(item => item.category === 'paquete');
                setItems(filteredPaquete);
            } else {
                setItems(fetchedItems); 
            }

            setLoading(false);
        };

        fetchItems();
    }, [itemType]);

    //mostrar el loading mientras se obtienen los datos
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
