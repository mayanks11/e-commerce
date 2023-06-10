import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";
export default function Product(props){
    
    const{id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    console.log(props.data);
    return(
        <div className="product">
            <img src = {productImage}/>
            <div className="description">
                <p> <b> {productName} </b></p>
                <p> <b> ${price} </b></p>
            </div>
            <button onClick={() => addToCart(id)} className="addToCartBttn">
                Add to Cart
                {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    )
}