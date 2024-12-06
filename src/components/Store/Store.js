import { create } from 'zustand';

export const useCarrito = create((set) => ({
  productos: [], 
  total: 0, 
  totalItems: 0, 

  //agregar un producto
  agregarProducto: (producto) => set((state) => {
    const existe = state.productos.find((p) => p.id === producto.id);
    if (existe) {
      return {
        productos: state.productos.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        ),
        total: state.total + producto.precio,
        totalItems: state.totalItems + 1,
      };
    } else {
      return {
        productos: [...state.productos, { ...producto, cantidad: 1 }],
        total: state.total + producto.precio,
        totalItems: state.totalItems + 1,
      };
    }
  }),

  //disminuir cantidad
  disminuirProducto: (id) => set((state) => {
    const producto = state.productos.find((p) => p.id === id);
    if (!producto) return state;

    if (producto.cantidad > 1) {
      return {
        productos: state.productos.map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        ),
        total: state.total - producto.precio,
        totalItems: state.totalItems - 1,
      };
    } else {
      return {
        productos: state.productos.filter((p) => p.id !== id),
        total: state.total - producto.precio,
        totalItems: state.totalItems - 1,
      };
    }
  }),

  //eliminar producto
  eliminarProducto: (id) => set((state) => {
    const producto = state.productos.find((p) => p.id === id);
    if (!producto) return state;

    return {
      productos: state.productos.filter((p) => p.id !== id),
      total: state.total - producto.precio * producto.cantidad,
      totalItems: state.totalItems - producto.cantidad,
    };
  }),
}));
