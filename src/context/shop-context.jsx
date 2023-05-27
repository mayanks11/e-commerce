import React, { createContext } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

export default function ShopContextProvider(props){
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }
    return(
        <ShopContext.Provider>
            {props.children}
        </ShopContext.Provider>
    )
}