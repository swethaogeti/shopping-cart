import {
  Add,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
} from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeProductFromCart,
  updateQuantityOfProductInCart,
} from "../../features/cartSlice";
import {
  moveProductToWishlist,
  removeProductFromWishlist,
} from "../../features/wishlistSlice";
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
  const navigate = useNavigate();
  const { wishlist } = useSelector((state) => state.wishlist);
  const handleDeleteProductFromCart = async (token, productId) => {
    const res = await dispatch(removeProductFromCart(token, productId));
  };

  const handleUpdateQuantity = async (token, productId, type) => {
    const res = await dispatch(
      updateQuantityOfProductInCart(token, productId, type)
    );
    console.log(res);
  };

  const handleMoveToWishlist = async (token, product) => {
    const res = await dispatch(moveProductToWishlist(token, product));
    console.log(res);
  };

  const handleDeleteProductFromWishlist = async (token, productId) => {
    const res = await dispatch(removeProductFromWishlist(token, productId));
  };

  return (
    <div className="cartCard">
      <div className="cartCard__img">
        <img src={img} alt="cart-product-img"></img>
        {wishlist.find((wishlistProduct) => wishlistProduct._id === _id) ? (
          <div className="cartCard__img__icon">
            <Favorite
              className="cartCard__red"
              onClick={() =>
                handleDeleteProductFromWishlist({ token, productId: _id })
              }
            />
          </div>
        ) : (
          <div className="cartCard__img__icon">
            <FavoriteBorderOutlined
              className="icon"
              onClick={() =>
                token
                  ? handleMoveToWishlist({ token, product })
                  : navigate("/signup")
              }
            />
          </div>
        )}
      </div>

      <div className="cartCard__desp">
        <div className="cartCard__desp__container">
          <h2 className="heading">{title}</h2>
          <p>by {author}</p>
          <div className="cartCard__desp__price">
            <h2>₹{discountedPrice}</h2>
            <span>₹{originalPrice}</span>
            <h3>{discount}% Off</h3>
          </div>
        </div>

        <div className="cartCard__desp__buttons">
          <div className="cartCard__desp__btn">
            <button
              onClick={() => {
                qty === 1
                  ? handleDeleteProductFromCart({ token, productId: _id })
                  : handleUpdateQuantity({
                      token,
                      productId: _id,
                      type: "decrement",
                    });
              }}
            >
              <Remove />
            </button>

            <p>{qty}</p>

            <button
              onClick={() => {
                handleUpdateQuantity({
                  token,
                  productId: _id,
                  type: "increment",
                });
              }}
            >
              <Add />
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
        <h4>₹{discountedPrice * qty}</h4>
      </div>
    </div>
  );
};
