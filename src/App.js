import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import CartList from './components/CartList';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='Products' element={<ProductList />} />
        <Route path='Product/:id' element={<ProductDetail />} />
        <Route path='Cart' element={<CartList />} />
      </Routes>

    </div>
  );
}

export default App;
