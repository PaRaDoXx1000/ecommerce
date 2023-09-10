import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Heart, Star } from "phosphor-react";
const Product = (props) => {
  const { name, id, price, img, rating, description } = props.data;
  const { addToCart, addToWishList, cartItem, wishItem } = useContext(ShopContext);
  const cartItemAmount = cartItem[id];
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
          <button onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
          <img onClick={() => addToWishList(id)} id="wishImg" src={wishItem[id]==true?"Heart.png":"RedHeart.png"}
          />

        </div>
      </div>
    </div>
  );
};

export default Product;
