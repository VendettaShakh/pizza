import React from 'react';
import { Routes, Route } from 'react-router';
import styles from './styles/app.scss'


import Header from './components/Header'
import Home from './pages/Home';
import Cart from './pages/Cart'
import CartEmpty from './components/CartEmpty';
import NotFound from './components/NotFound';



function App() {
return (
    <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='cart' element={<Cart/>}/>
              <Route path='cart-empty' element={<CartEmpty/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </div>
        </div>
    </div>
    
  );
}

export default App;
