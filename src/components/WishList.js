import React, { useContext } from "react";
import { product } from "./products";
import {WishListItems} from "./WishListItems";
import { ShopContext } from "./ShopContext";
const WishList = () => {
  const {wishItem} = useContext(ShopContext);
  return (
<div className="WishList">
        
        {product.map((product) => {
          if (wishItem[product.id] !== true) {
            return <WishListItems data={product} />;
          }
        })}
      </div>  )
}


export default WishList