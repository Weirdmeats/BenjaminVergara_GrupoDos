import React from 'react';
import { useCarrito } from '../../Store/Store';

const Carrito = () => {
    const { productos, total, totalItems, disminuirProducto, eliminarProducto } = useCarrito();

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>

            {/*si esta vacio el carrito*/}
            {productos.length === 0 ? (
                <p className="mt-4 text-gray-500">Tu carrito está vacío. ¡Añade productos para comenzar!</p>
            ) : (
                <div>
                    <p className="text-lg">Total de Items: {totalItems}</p>
                    <p className="text-lg mb-4">Total: ${total}</p>

                    {/*lista del carrito*/}
                    <div className="mt-4 space-y-4">
                        {productos.map((producto) => (
                            <div
                                key={producto.id}
                                className="flex flex-col md:flex-row items-center justify-between p-4 border rounded shadow-sm"
                            >
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <img
                                        src={producto.img}
                                        alt={producto.name}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold">{producto.name}</h4>
                                        <p>Precio: ${producto.price}</p>
                                        <p>Cantidad: {producto.cantidad}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 md:mt-0">
                                    <button //disminuye el producto de 1 a 1
                                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 w-full md:w-auto"
                                        onClick={() => disminuirProducto(producto.id)}
                                    >
                                        -
                                    </button>
                                    <button //eliminar el producto
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 w-full md:w-auto"
                                        onClick={() => eliminarProducto(producto.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carrito;
