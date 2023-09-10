import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
const CartItems = (props) => {
  const { name, id, price, img } = props.data;
  const { addToCart, cartItem, removeFromCart, updateCart } = useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cartImage">
        <img src={img} />
      </div>
      <div className="cartDiscription">
        <div className="aboutItem">
          <h3>{name}</h3>
          <h3>${price}</h3>
        </div>
        <div className="cartButton"> 
          <button id="cartbtn" onClick={() => removeFromCart(id)}>-</button>
          <input id="cartInput" value={cartItem[id]} onChange={(e)=>updateCart(Number(e.target.value),id)}/>
          <button id="cartbtn" onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
