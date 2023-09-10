import React, { useContext } from "react";
import { product } from "./products";
import { ShopContext } from "./ShopContext";
import CartItems from "./CartItems";
export const Cart = () => {
  const { cartItem, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  let discount = (totalAmount * 5) / 100;

  return (
    <div className="cart">
      <div className="slides">
        {product.map((product) => {
          if (cartItem[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>
      
      <div className="priceContainer">
      {totalAmount==0?<h1>Your Cart Is Empty</h1>:
      <div><div className="price">
          <p>Net Price</p>
          <p>₹{totalAmount}</p>
        </div>
        <div className="discount">
        <p>Discount(5%)</p>
          <p>-₹{discount}</p>
        </div>
        <div className="payableAmount"> 
        <p>Payable Amount</p>
        <p>₹{totalAmount - discount}
        </p></div>
        <button id="priceButton">Check out( ₹{totalAmount - discount})</button></div>}
        
      </div>
    </div>
  );
};
