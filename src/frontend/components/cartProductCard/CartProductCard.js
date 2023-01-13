import { Add, Remove } from "@material-ui/icons";
import React from "react";
import "./cartProductCard.css";
export const CartProductCard = () => {
  return (
    <div className="cartCard">
      <div className="cartCard__img">
        <img
          src="https://m.media-amazon.com/images/I/81FummIc2eL._AC_UY327_FMwebp_QL65_.jpg"
          alt="cart-product-img"
        ></img>
      </div>

      <div className="cartCard__desp">
        <div>
          <h2>It ends with us</h2>
          <p>by Collen Hoover</p>
          <div className="cartCard__desp__price">
            <h2>₹2999</h2>
            <span>₹3999</span>
            <h3>25% Off</h3>
          </div>
        </div>

        <div className="cartCard__desp__buttons">
          <div className="cartCard__desp__btn">
            <button>
              <Add />
            </button>
            <h3>1</h3>
            <button>
              <Remove />
            </button>
          </div>

          <button>Remove</button>
        </div>
      </div>
      <div className="cartCard__total">
        <p>Total Price</p>
        <h2>₹2999</h2>
      </div>
    </div>
  );
};
