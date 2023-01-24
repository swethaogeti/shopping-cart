import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartProductCard, CartTotal } from "../../components";
import { getCartProducts } from "../../features/cartSlice";
import "./cartPage.css";
export const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(token, "cart token");
  console.log(cart);
  useEffect(() => {
    dispatch(getCartProducts(token));
  }, []);

  return (
    <div className="cartPage">
      <div className="cartPage__products">
        {cart.length > 0
          ? cart.map((product) => {
              return <CartProductCard product={product} />;
            })
          : "cart is empty"}
      </div>

      <div className="cartPage__total">
        <CartTotal className="cartPage__total__container" />
      </div>
    </div>
  );
};
