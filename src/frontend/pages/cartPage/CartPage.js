import React from "react";
import {
  CartProductCard,
  CartTotal,
  WishlistProductCard,
} from "../../components";
import "./cartPage.css";
export const CartPage = () => {
  return (
    <div className="cartPage">
      <CartTotal />
      <CartProductCard />
      <WishlistProductCard />
    </div>
  );
};
