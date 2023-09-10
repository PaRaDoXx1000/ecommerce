import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import {Heart} from 'phosphor-react';

export const Navbar=()=>{
    return(
        <div className='navbar'>
            <h2>Ecommerce site</h2>
            <div className='link'>
            <Link to="/">Shop</Link>
            <Link to="/cart"><ShoppingCart size={32}/></Link>
            <Link to="/wishList"><Heart size={32}/></Link>
            </div>
        </div>
    )
}