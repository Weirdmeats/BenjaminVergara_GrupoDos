import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { getProductById, getServiceById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';
import { useShoppingCart } from '../../components/ShoppingCart/ShoppingCartContext.jsx'; 

// Componente para mostrar los detalles de un producto o servicio
export default function ItemDetail() {
    const { productId, serviceId } = useParams(); 
    const [item, setItem] = useState({ stock: 0 }); 
    const [loading, setLoading] = useState(true); 
    const [quantity, setQuantity] = useState(1);
    const { dispatch } = useShoppingCart(); 

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

    // Manejar la adición al carrito
    const handleAddToCart = () => {
        if (quantity > 0) {
            dispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity } });
            alert(`${quantity} ${item.name}(s) agregado(s) al carrito`);
        }
    };

    // Renderizar carga
    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }
    
    // Manejar item no encontrado
    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className='container mx-auto max-w-[1170px]'>
            <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    {/* Mostrar imagen del producto o servicio */}
                    <img src={item.img} alt="Imagen del producto o servicio" className='w-full rounded-[20px]' />
                </div>
                <div>
                    <h1 className='text-[45px] font-medium uppercase'>{item.name}</h1>
                    <p className='text-[20px] my-[20px]'>{item.description || item.despcription}</p>
                    <p className='text-[20px] my-[20px]'>Stock: {item.stock}</p>
                    <div className='flex'>
                        {/* Botones para ajustar la cantidad */}
                        <button onClick={decrementQuantity} className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> - </button>
                        <p className='text-[20px] px-[10px]'>{quantity}</p>
                        <button onClick={incrementQuantity} className='rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> + </button>
                    </div>
                    <p className='text-[20px] my-[20px]'>Precio: ${item.price} por unidad</p>
                    <p className='text-[20px] my-[20px]'>Precio Total: ${precioTotal}</p>
                    {/* Botón para agregar al carrito */}
                    <button onClick={handleAddToCart} className='bg-slate-500 text-[#ffffff] text-[20px] px-[25px] py-[5px] rounded-lg hover:bg-[#304c8a]'>Comprar</button>
                </div>
            </div>
        </div>
    );
}
