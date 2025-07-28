import React from 'react';
import { Routes, Route } from 'react-router';
import styles from './styles/app.scss'


import Header from './components/Header'
import Home from './pages/Home';
import Cart from './pages/Cart'
import CartEmpty from './components/CartEmpty';
import NotFound from './components/NotFound';

export const SearchContext = React.createContext();

function App() {

const [searchInput, setSearchInput] = React.useState('')


return (
    <div className="wrapper">
        <SearchContext.Provider value={ {searchInput, setSearchInput} }>
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
        </SearchContext.Provider>
    </div>
    
  );
}

export default App;
