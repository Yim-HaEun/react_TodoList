import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import About from "./About"
import TodoList from "./ToDoList";
import banner from '../img/bikinicity.png';
function Header (){
    return(
        <header style={{ backgroundImage: `url(${banner})` }}>
            <h1>Sponge Bob's -log </h1>
            <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to = "/todo">할 일 목록</Link>
            </li>
          </ul>
            <nav>
            <Routes>
                <Route path="/todo" element={<TodoList/>}/>
            </Routes>
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