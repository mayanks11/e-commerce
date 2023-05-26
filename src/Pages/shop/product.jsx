import React from "react";

export default function Product(props){
    
    const{id, productName, price, productImage} = props.data;
    console.log(props.data);
    return(
        <div className="product">
            <img src = {productImage}/>
            <div className="description">
                <p> <b> {productName} </b></p>
                <p> <b> ${price} </b></p>
            </div>
        </div>
    )
}