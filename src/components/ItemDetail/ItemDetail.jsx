import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { getProductById, getServiceById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';

// Componente para mostrar los detalles de un producto o servicio
export default function ItemDetail() {
    const { productId, serviceId } = useParams(); 
    const [item, setItem] = useState({ stock: 0 }); 
    const [loading, setLoading] = useState(true); 
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Cargar producto o servicio según el id
        if (productId) {
            getProductById(productId).then((data) => {
                setItem(data);
                setLoading(false);
                setQuantity(data.stock > 0 ? 1 : 0);
            }).catch(() => {
                setLoading(false); 
                setItem(null); 
            });
        } else if (serviceId) {
            getServiceById(serviceId).then((data) => {
                setItem(data);
                setLoading(false);
                setQuantity(data.stock > 0 ? 1 : 0); 
            }).catch(() => {
                setLoading(false); 
                setItem(null); 
            });
        } else {
            setLoading(false); 
            setItem(null); 
        }
    }, [productId, serviceId]);

    // Funciones para manejar la cantidad
    const decrementQuantity = () => {
        if (quantity > 1) { 
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if (quantity < item.stock) { 
            setQuantity(quantity + 1);
        }
    };

    // Calcular el precio total
    const precioTotal = item.price ? item.price * quantity : 0;

    
    const handleAddToCart = () => {
        if (quantity > 0) {
         
            alert(`${quantity} "${item.name}" agregado al carrito.`);
           ;
        }
    };

    // Renderizar carga
    if (loading) {
        return <div className="container mx-auto max-w-[1170px]"><Loading /></div>;
    }
    
    // Manejar item no encontrado
    if (!item) {
        return <div className="text-center text-red-500">Item not found</div>;
    }

    return (
        <div className="container mx-auto max-w-[1170px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pb-16">
                <div className="flex justify-center md:justify-start">
                    {/*mostrar imagen del producto o servicio */}
                    <img src={item.img} alt="Imagen del producto o servicio" className="w-full max-w-[300px] md:max-w-full rounded-lg shadow-lg" />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-[30px] md:text-[45px] font-medium uppercase text-[#1e293b]">{item.name}</h1>
                    <p className="text-[16px] md:text-[20px] my-4 text-[#4b5563]">{item.description || item.despcription}</p>
                    <p className="text-[16px] md:text-[20px] my-4 text-[#4b5563]">Stock: {item.stock}</p>
                    <div className="flex items-center justify-center md:justify-start gap-4 my-4">
                        {/*botones para ajustar la cantidad */}
                        <button onClick={decrementQuantity} className="rounded-md hover:bg-slate-600 hover:text-white w-12 border text-[16px] md:text-[20px] flex justify-center items-center">-</button>
                        <p className="text-[16px] md:text-[20px] px-2">{quantity}</p>
                        <button onClick={incrementQuantity} className="rounded-md hover:bg-slate-600 hover:text-white w-12 border text-[16px] md:text-[20px] flex justify-center items-center">+</button>
                    </div>
                    <p className="text-[16px] md:text-[20px] my-4 text-[#4b5563]">Precio: ${item.price} por unidad</p>
                    <p className="text-[16px] md:text-[20px] my-4 font-semibold text-[#1e293b]">Precio Total: ${precioTotal}</p>
                    {/* Botón para agregar al carrito */}
                    <button 
                        className="bg-slate-500 text-white text-[16px] md:text-[20px] px-6 py-2 rounded-lg hover:bg-[#304c8a] transition duration-300"
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}
