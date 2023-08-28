import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";
export const ShopContext = createContext(null);
//getDefaultCartObject function handles the IDs of the products when new ones added in the PRODUCTS array
const getDefaultCartObject = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => getDefaultCartObject());
  //this function will allow to add items to cart based on how many times its ID is increased
  /*
  [ ID: Amount ||   ID: Amount
    1:0        =>    1: 1
  ]
  */
  const addToCart = (itemID) => {
    setCartItems((previous) => ({
      ...previous, // previous is considered as all the attributes in the object
      [itemID]: previous[itemID] + 1, //here just increase the ID
    }));
  };
  const removeFromCart = (itemID) => {
    setCartItems((previous) => ({
      ...previous, // previous is considered as all the attributes in the object
      [itemID]: previous[itemID] - 1, //here just increase the ID
    }));
  };
  const updateItemCartCountManually = (newAmount, itemID) => {
    setCartItems((previous) => ({ ...previous, [itemID]: newAmount }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] != 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  //if you want to pass all states and functions to the provider, it's a must to make an object containing all states and functions into a value in the provider
  const passTheContextValues = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemCartCountManually,
    getTotalCartAmount
  };
  return (
    <ShopContext.Provider value={passTheContextValues}>
      {props.children}
    </ShopContext.Provider>
  );
};
