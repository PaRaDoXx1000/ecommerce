import React from 'react';
import { product } from './products';
import Product from './Product';
export const Shop=()=>{
   
    return(
        <div className='shopContainer' >
        <div className='title'> <h1 id='title'>Yash's Shop</h1></div>
       
           <div className='shop'>
            {product.map((product)=>(
                <Product data = {product} />
            ))}
           </div>
        </div>
    )
}