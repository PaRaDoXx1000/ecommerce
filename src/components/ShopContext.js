import React, { createContext, useState } from 'react'
import { product } from './products';

export const ShopContext = createContext(0);
const getDefaultCart = ()=>{
    let cart = {}
    for(let i=1 ; i<product.length+1; i++){
        cart[i]=0
    }
    return cart;
}
const getWishList = ()=>{
    let wishList = {}
    for(let i=1 ; i<product.length+1; i++){
        wishList[i]=true;
    }
    return wishList;
}

export const ShopContextProvider = (props)=>{
    const [cartItem , setCartItem] = useState(getDefaultCart());
    const [wishItem , setwishItem] = useState(getWishList());
    const getTotalAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItem){
            let itemInfo = product.find((product)=> product.id = Number(item));
            totalAmount += cartItem[item]*itemInfo.price;
        }
        return totalAmount;
    }
    const addToCart = (ItemId)=>{
        setCartItem((prev)=>({...prev, [ItemId]: prev[ItemId]+1}))
    }
    const removeFromCart = (ItemId)=>{
        setCartItem((prev)=>({...prev, [ItemId]: prev[ItemId]-1}))
    }
    const updateCart = (amount,ItemId)=>{
        setCartItem((prev)=>({...prev, [ItemId]: amount}))
    }
    const addToWishList = (ItemId)=>{
        setwishItem((prev)=>({...prev, [ItemId]:!wishItem[ItemId]}))
    }
    
    const contextContainer = {
        cartItem,
        addToCart,
        removeFromCart,
        updateCart,
        getTotalAmount,
        addToWishList,
        wishItem
    }
    console.log(cartItem);
    console.log(wishItem);
    console.log(getTotalAmount.totalAmount);

    return(
        <ShopContext.Provider value={contextContainer}>
        {props.children}
        </ShopContext.Provider>
    )
}
