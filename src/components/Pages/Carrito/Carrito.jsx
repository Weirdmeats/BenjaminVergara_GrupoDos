import React from 'react';
import { useCarrito } from '../../Store/Store';

const Carrito = () => {
    const { productos, total, totalItems, disminuirProducto, eliminarProducto } = useCarrito();//se obtienen os productos y diferentes funciones
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Carrito de Compras</h2>
            {productos.length === 0 ? (
                <p className="text-center text-gray-500">Tu carrito está vacío. Agrega productos o servicios para continuar.</p>
            ) : (
                <div className="space-y-6">
                    {productos.map((producto) => (
                        <div
                            key={producto.id}
                            className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm gap-4">
                            <div className="flex items-center gap-4">
                                {/*informacion*/}
                                <img
                                    src={producto.img}
                                    alt={producto.name}
                                    className="w-24 h-24 object-cover rounded-lg"
                                    />
                                <div>
                                    <h4 className="text-lg font-semibold">{producto.name}</h4>
                                    <p className="text-gray-600">Precio unitario: ${producto.precio}</p>
                                    <p className="text-gray-600">Cantidad: {producto.cantidad}</p>
                                    <p className="text-gray-600">Subtotal: ${producto.precio * producto.cantidad}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-500"
                                    onClick={() => disminuirProducto(producto.id)}//disminuye el producto
                                >
                                    -
                                </button>
                                <button
                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
                                    onClick={() => eliminarProducto(producto.id)}//elimina los productos
                                    >Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-right space-y-2"> 
                        <p className="text-lg">Total de Items: <span className="font-bold">{totalItems}</span></p>
                        <p className="text-lg font-semibold">Total: ${total}</p> {/*precio total*/}
                        <button
                            className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-500"
                            onClick={() => alert('Pagar funcionalidad no implementada todavia')} //msg
                            >Pagar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Carrito;
