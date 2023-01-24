import { Add, Remove } from "@material-ui/icons";
import React from "react";
import "./cartProductCard.css";
export const CartProductCard = ({ product }) => {
  const {
    _id,
    img,
    author,
    title,
    discount,
    description,
    originalPrice,
    discountedPrice,
  } = product;

  return (
    <div className="cartCard">
      <div className="cartCard__img">
        <img src={img} alt="cart-product-img"></img>
      </div>

      <div className="cartCard__desp">
        <div>
          <h2>{title}</h2>
          <p>by {author}</p>
          <div className="cartCard__desp__price">
            <h2>₹{discountedPrice}</h2>
            <span>₹{originalPrice}</span>
            <h3>{discount}% Off</h3>
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
