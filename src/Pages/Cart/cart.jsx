import React, { useContext } from "react";
import { PRODUCTS } from "../../products.js";
import { ShopContext } from "../../Context/shop-context";
import { CartItem } from "./cart-item.jsx";
import "./cartCSS.css";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Your Cart Items</h1>
        <br />
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <section>
            <b>Subtotal: ${totalAmount}</b>
          </section>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is empty!</h1>
      )}
    </div>
  );
};
