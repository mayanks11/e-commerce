import React from "react";
import {PRODUCTS} from "../../products";
import Product from "./product";
import "./shop.css";
export default function Shop(){
    //console.log(PRODUCTS);
    return(
        <div className="shop">
            <div className="shopTitle">
                <h1>Mayank's Shop</h1>
            </div>
            {" "}
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
        </div>
    )
}