import React from "react";
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Shop from "./Pages/shop";
import Cart from "./Pages/cart";
import ShopContextProvider from "./context/shop-context";
export default function App(){
    return(
        <div className="app">
        <ShopContextProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path = "/" element={<Shop/>}/>
                    <Route path = "/cart"element={<Cart/>}/>
                </Routes>
            </Router>
            </ShopContextProvider>
        </div>
    )
}