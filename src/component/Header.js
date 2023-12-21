import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import About from "./About"

import banner from '../img/back.jpg';
function Header (){
    return(
        <header style={{ backgroundImage: `url(${banner})` }}>
            <h1>Sponge Bob's -log </h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <About/>
        </header>
    )
}
export default Header;