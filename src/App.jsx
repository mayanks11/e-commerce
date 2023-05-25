import React from "react";
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
export default function App(){
    return(
        <div className="app">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path = "/"/>
                    <Route path = "/cart"/>
                </Routes>
            </Router>
        </div>
    )
}