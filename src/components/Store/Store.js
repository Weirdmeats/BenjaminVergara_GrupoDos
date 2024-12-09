import { create } from 'zustand';

export const useCarrito = create((set) => {
  //guardado de localstorage
  const savedCarrito = localStorage.getItem('carrito');
  const initialState = savedCarrito ? JSON.parse(savedCarrito) : {
    productos: [],
    total: 0,
    totalItems: 0,
  };
  return {
    ...initialState,
    //agregar productos al carrito
    agregarProducto: (producto) => set((state) => {
      const stockDisponible = producto.stock;
      if (producto.cantidad > stockDisponible) {
        alert(`Lo siento, hay ${stockDisponible} unidades disponibles de ${producto.nombre}`);
        return state; //si no hay suficiente stock
      }
      const existe = state.productos.find((p) => p.id === producto.id);
      let newState;

      if (existe) {
        //si existe
        const cantidadTotal = existe.cantidad + producto.cantidad;
        if (cantidadTotal <= stockDisponible) {
          newState = {
            productos: state.productos.map((p) =>
              p.id === producto.id ? { ...p, cantidad: cantidadTotal } : p
            ),
            total: state.total + producto.precio * producto.cantidad,
            totalItems: state.totalItems + producto.cantidad,
          };
          alert(`${producto.nombre} fue agregado al carrito. Ahora tienes ${cantidadTotal} unidades.`);
        } else {
          alert(`No queda esa cantidad de unidades disponibles de ${producto.nombre}`);
          return state; //no agregar producto si excede el stock
        }
      } else {
        //si el producto no existe en el carrito lo agregamos
        newState = {
          productos: [...state.productos, { ...producto, cantidad: producto.cantidad }],
          total: state.total + producto.precio * producto.cantidad,
          totalItems: state.totalItems + producto.cantidad,
        };
      }

      //guardar
      localStorage.setItem('carrito', JSON.stringify(newState));
      return newState;
    }),

    //disminuir producto
    disminuirProducto: (id) => set((state) => {
      const producto = state.productos.find((p) => p.id === id);
      if (!producto) return state;
      let newState;

      if (producto.cantidad > 1) {
        newState = {
          productos: state.productos.map((p) =>
            p.id === id ? { ...p, cantidad: producto.cantidad - 1 } : p
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

      //guardar
      localStorage.setItem('carrito', JSON.stringify(newState));
      return newState;
    }),

    //elminar producto
    eliminarProducto: (id) => set((state) => {
      const producto = state.productos.find((p) => p.id === id);
      if (!producto) return state;

      const newState = {
        productos: state.productos.filter((p) => p.id !== id),
        total: state.total - producto.precio * producto.cantidad,
        totalItems: state.totalItems - producto.cantidad,
      };

      //guardar
      localStorage.setItem('carrito', JSON.stringify(newState));
      return newState;
    }),
  };
});
