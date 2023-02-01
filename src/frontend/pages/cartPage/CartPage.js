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

  useEffect(() => {
    dispatch(getCartProducts(token));
  }, []);

  return (
    <div className="cartPage">
      {cart.length > 0 ? (
        <>
          <div className="cartPage__products">
            {cart.map((product) => {
              return <CartProductCard product={product} />;
            })}
          </div>

          <div className="cartPage__total">
            <CartTotal className="cartPage__total__container" />
          </div>
        </>
      ) : (
        "cart is empty"
      )}
    </div>
  );
};
