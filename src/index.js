import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import Cart from './components/Cart';
import BecomeSeller from './components/BecomeSeller';
import Product from './components/Product';
import { CartProvider } from "../src/components/Cartcontext";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
        <Route path='/login' element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/myProfile' element={<ProfilePage />} />
            <Route path="/myCart" element={<Cart />} />
            <Route path='/becomeSeller' element={<BecomeSeller />} />
            <Route path='/products/:id' element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </>
);
