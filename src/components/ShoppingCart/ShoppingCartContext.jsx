import React, { createContext, useContext, useReducer } from 'react';

//estado inicial del carrito
const initialState = {
    cart: []
};

//acciones para el reducer
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

//reducer para manejar el estado del carrito
const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };
        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
        default:
            return state;
    }
};

//crear el contexto
const ShoppingCartContext = createContext();

//proveedor del contexto
export const ShoppingCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <ShoppingCartContext.Provider value={{ state, dispatch }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

//hook para usar el contexto
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};
