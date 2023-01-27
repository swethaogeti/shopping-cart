import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../../features/cartSlice";
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
    qty,
    count,
  } = product;
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleDeleteProductFromCart = async (token, productId) => {
    const res = await dispatch(removeProductFromCart(token, productId));
  };

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
            <h3>{qty}</h3>
            <button>
              <Remove />
            </button>
          </div>

          <button
            onClick={() =>
              handleDeleteProductFromCart({ token, productId: _id })
            }
          >
            Remove
          </button>
        </div>
      </div>
      <div className="cartCard__total">
        <p>Total Price</p>
        <h2>₹2999</h2>
      </div>
    </div>
  );
};
