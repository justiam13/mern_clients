import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './components/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
<Router>
<Navbar/>
<Routes>
<Route path="/about" element={<h1>About</h1>}/>
<Route path="/Register" element={<Register/>}/>
<Route path="/Login" element={<h1>Login</h1>}/>

</Routes>
</Router>
</div>
);
