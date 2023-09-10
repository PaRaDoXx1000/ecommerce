import './App.css';
import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from './components/Cart';
import { Shop } from './components/Shop';
import { ShopContextProvider } from './components/ShopContext';
import WishList from './components/WishList';
<style>

@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Rubik+Iso&display=swap');

</style>

 

function App() {

 

    return (
      <div className="App">
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/wishList' element={<WishList/>}/>
            </Routes>
          </Router>
          </ShopContextProvider>
      </div>
  );
}

export default App;
