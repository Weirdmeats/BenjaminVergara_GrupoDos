import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, getServiceById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';
import { useCarrito } from '../Store/Store';

export default function ItemDetail() {
    //conseguir parametros productid o serviceid
    const { productId, serviceId } = useParams();
    //almacenar estados de informacion
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { agregarProducto } = useCarrito();
    //efecto para cargar el producto o servicio
    useEffect(() => {
        const fetchData = productId ? getProductById : getServiceById;
        const id = productId || serviceId;
        if (id) {
            fetchData(id)
                .then((data) => {
                    setItem(data);
                    setQuantity(data.stock > 0 ? 1 : 0);})
                .catch(() => setItem(null))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [productId, serviceId]);
    const updateQuantity = (change) => {
        setQuantity((q) => Math.min(Math.max(q + change, 1), item.stock));
    };
    //funcion para agregar el producto al carrito
    const handleComprar = () => {
        //verificamos stock
        if (item?.stock > 0 && quantity > 0 && quantity <= item.stock) {
          //agregar producto
          agregarProducto({
            id: item.id,
            nombre: item.name,
            precio: item.price,
            cantidad: quantity,
            stock: item.stock,
            img: item.img,
          });
          //si hay stock
          alert(`(${quantity}) unidades de ${item.name} fueron agregadas al carrito recientemente.`);
        } else {
          //si no hay
          alert(`No queda esa cantidad de unidades disponibles de ${item.name}`);
          return; // Salir de la función inmediatamente después de mostrar el mensaje de error
        }
      };
    if (loading) return <div className="container mx-auto"><Loading /></div>;
    if (!item) return <div className="text-center text-red-500">Item no encontrado</div>;
    const precioTotal = item.price * quantity;
    return (
        <div className="container mx-auto px-6 py-10 max-w-4xl">
            <div className="grid gap-10 md:grid-cols-2 items-center">
                <div className="flex justify-center">
                    <img src={item.img || 'Imagen del Producto'} alt={item.name} className="w-full max-w-lg rounded-lg shadow-md" /></div>
                <div>
                    <h1 className="text-5xl font-bold text-gray-800">{item.name}</h1>
                    <p className="text-lg text-gray-600 my-6">{item.description}</p>
                    <p className="text-lg font-medium">Stock: {item.stock}</p>
                    <div className="flex items-center gap-6 my-6">
                        <button //disminuir producto
                            onClick={() => updateQuantity(-1)} className="w-12 h-12 bg-gray-200 rounded-full text-2xl font-bold hover:bg-gray-300">-
                        </button>
                        <span className="text-2xl font-semibold">{quantity}</span>
                        <button //aumentar producto
                            onClick={() => updateQuantity(1)} className="w-12 h-12 bg-gray-200 rounded-full text-2xl font-bold hover:bg-gray-300">+
                        </button>
                    </div>
                    <p className="text-xl">Precio por unidad: <span className="font-bold">${item.price}</span></p>
                    <p className="text-2xl font-bold my-4">Precio Total: ${precioTotal}</p>
                    <button //comprar
                        className="px-6 py-3 bg-slate-700 text-white text-xl rounded-lg shadow hover:bg-slate-400 transition"
                        onClick={handleComprar}>Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}
