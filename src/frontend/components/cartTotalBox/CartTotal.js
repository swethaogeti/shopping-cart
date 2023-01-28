import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal } from "../../features/cartSlice";
import "./cartTotal.css";

export const CartTotal = () => {
  const dispatch = useDispatch();
  const {
    cartTotalAmount,
    cart,
    cartTotalDiscount,
    cartTotalPrice,
    cartTotalProducts,
  } = useSelector((state) => state.cart);
  console.log(
    cartTotalAmount,
    cartTotalPrice,
    cartTotalDiscount,
    cartTotalProducts
  );
  useEffect(() => {
    dispatch(cartTotal());
  }, [
    cart,
    cartTotalAmount,
    cartTotalDiscount,
    cartTotalPrice,
    cartTotalProducts,
  ]);
  return (
    <div className="cartTotal">
      <h1>Price Deatils</h1>
      <hr></hr>
      <div className="cartTotal__detail">
        <p>Price({cartTotalProducts} items) </p>
        <h4>₹{cartTotalPrice}</h4>
      </div>
      <div className="cartTotal__detail">
        <p>Discount </p>
        <h4>₹{cartTotalDiscount}</h4>
      </div>
      <div className="cartTotal__detail">
        <p>Delivery charges </p>
        <h4>Free</h4>
      </div>
      <hr />
      <div className="cartTotal__detail">
        <h1>Total Amount</h1>
        <h3>₹{cartTotalAmount}</h3>
      </div>
      <hr />
      <button>Proceed to Checkout</button>
    </div>
  );
};
