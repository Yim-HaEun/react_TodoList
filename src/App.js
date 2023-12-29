import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/App.css';
import './img/Xmas.jpg';
import TodoList from './component/ToDoList';
import Home from './component/Home';
import Header from './component/Header';

import Footer from './component/Footer';
function App() {
  return (
    <Router>
      <div id="height">
        <Header />
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">할 일 목록</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Footer />
          </div>
        </div>

        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
