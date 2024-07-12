import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import { MyContext } from './Mycontext';
import Home from './components/home';
import TodoList from './components/TodoList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
<Router>
<Navbar/>
<Home/>
<TodoList/>
<Routes>
<Route path="/about" element={<h1>About</h1>}/>
<Route path="/Register" element={<Register/>}/>
<Route path="/Login" element={<h1>Login</h1>}/>

</Routes>
</Router>
</div>
);
