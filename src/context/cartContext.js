import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'

const CartContext = createContext();

const getLocalStorageData = () => {
    let newCartData = localStorage.getItem("myCart");
    if (newCartData.length === 0) return [];
    else return JSON.parse(newCartData);
}

const initialState = {
    // cart: [],
    cart: getLocalStorageData(),
    totalItem: "",
    totalAmount: "",
    shippingFee: 50000,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    }

    // to store the cart in localStorage
    useEffect(() => {
        localStorage.setItem("myCart", JSON.stringify(state.cart))
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };