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
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
          alt="empty-cart-img"
        ></img>
      )}
    </div>
  );
};
