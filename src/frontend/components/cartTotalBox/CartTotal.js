import React from "react";
import "./cartTotal.css";
export const CartTotal = () => {
  return (
    <div className="cartTotal">
      <h1>Price Deatils</h1>
      <hr></hr>
      <div className="cartTotal__detail">
        <p>Price(0 items) </p>
        <h4>₹0</h4>
      </div>
      <div className="cartTotal__detail">
        <p>Discount </p>
        <h4>₹0</h4>
      </div>
      <div className="cartTotal__detail">
        <p>Delivery charges </p>
        <h4>Free</h4>
      </div>
      <hr />
      <div className="cartTotal__detail">
        <h1>Total Amount</h1>
        <h3>₹097766</h3>
      </div>
      <hr />
      <button>Proceed to Checkout</button>
    </div>
  );
};
