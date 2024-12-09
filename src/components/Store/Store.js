import { create } from 'zustand';

export const useCarrito = create((set) => {
  //localStorage
  const savedCarrito = localStorage.getItem('carrito');
  const initialState = savedCarrito ? JSON.parse(savedCarrito) : {
    productos: [],
    total: 0,
    totalItems: 0,
  };
  return {
    ...initialState,
    //agregar producto
    agregarProducto: (producto) => set((state) => {
      const existe = state.productos.find((p) => p.id === producto.id);
      let newState;

      if (existe) {
        newState = {
          productos: state.productos.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + producto.cantidad } : p
          ),
          total: state.total + producto.precio * producto.cantidad,
          totalItems: state.totalItems + producto.cantidad,
        };
      } else {
        newState = {
          productos: [...state.productos, { ...producto, cantidad: producto.cantidad }],
          total: state.total + producto.precio * producto.cantidad,
          totalItems: state.totalItems + producto.cantidad,
        };
      }
      //guardar localStorage
      localStorage.setItem('carrito', JSON.stringify(newState));
      return newState;
    }),
    //desminuir producto
    disminuirProducto: (id) => set((state) => {
      const producto = state.productos.find((p) => p.id === id);
      if (!producto) return state;
      let newState;
      if (producto.cantidad > 1) {
        newState = {
          productos: state.productos.map((p) =>
            p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
          ),
          total: state.total - producto.precio,
          totalItems: state.totalItems - 1,
        };
      } else {
        newState = {
          productos: state.productos.filter((p) => p.id !== id),
          total: state.total - producto.precio,
          totalItems: state.totalItems - 1,
        };
      }
      //guardar el localStorage
      localStorage.setItem('carrito', JSON.stringify(newState));
      return newState;
    }),
    //eliminar producto
    eliminarProducto: (id) => set((state) => {
      const producto = state.productos.find((p) => p.id === id);
      if (!producto) return state;

      const newState = {
        productos: state.productos.filter((p) => p.id !== id),
        total: state.total - producto.precio * producto.cantidad,
        totalItems: state.totalItems - producto.cantidad,
      };
      localStorage.setItem('carrito', JSON.stringify(newState));
      return newState;
    }),
  };
});
