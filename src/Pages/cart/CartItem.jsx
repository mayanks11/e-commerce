import React from "react";

export default function CartItem(props){
    const{id, productName, price, productImage} = props.data;
    return(
        <div className="cartItem">
            <img src = {productImage}/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p><b>${price}</b></p>
            </div>
        </div>
    )
}