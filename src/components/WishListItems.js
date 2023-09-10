import React, { useContext } from 'react'
import { ShopContext } from './ShopContext';
import { Star } from 'phosphor-react';

export const WishListItems = (props) => {
  const { name, id, price, img, description,rating } = props.data;
  const {addToWishList,cartItem,addToCart} = useContext(ShopContext);
  return (
     <div className="Products">
      <div>
        <img src={img} />
      </div>
      <div className="ProductBox">
        <div className="productName">
          <p>{name}</p>
        </div>

        <div className="star">
          <p>{rating}</p>
          <Star id="star1" />
        </div>
        <div>
          
          <p>{description[0]}</p>
          <p>{description[1]}</p>
           
        </div>
        <p id="price">₹{price}</p>

        <div className="productButton">
        <button id='abc' onClick={() => addToCart(id)} >Add To Cart {cartItem[id]}</button>
        <button id='abc' onClick={() => addToWishList(id)}>Remove From WishList</button>

          
      
        </div>
      </div>
    </div>
      
   
  )
}

export default WishListItems