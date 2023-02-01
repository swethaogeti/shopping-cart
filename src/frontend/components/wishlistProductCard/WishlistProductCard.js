import { Delete, ShoppingCartRounded } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductToCart } from "../../features/cartSlice";
import { removeProductFromWishlist } from "../../features/wishlistSlice";
import "./wishlistProductCard.css";
export const WishlistProductCard = ({ product }) => {
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleAddToCart = async (token, product) => {
    const res = await dispatch(addProductToCart(token, product));
  };
  const handleDeleteProductFromWishlist = async (token, productId) => {
    const res = await dispatch(removeProductFromWishlist(token, productId));
  };
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="wishlistCard">
      <div className="wishlistCard__img">
        <img src={img} alt="wishlist-product-img"></img>
      </div>

      <div className="wishlistCard__desp">
        <div className="wishlistCard__desp__container">
          <h2>{title}</h2>
          <p>by {author}</p>
          <div className="wishlistCard__desp__price">
            <h2>₹{discountedPrice}</h2>
            <span>₹{originalPrice}</span>
            <h3>{discount}% Off</h3>
          </div>

          <p>{description}</p>
        </div>

        {cart.find((cartProduct) => cartProduct._id === _id) ? (
          <div className="wishlistCard__desp__btn">
            <button className="wishlist__btn" onClick={() => navigate("/cart")}>
              Go To Cart
            </button>
          </div>
        ) : (
          <div className="wishlistCard__desp__btn">
            <button
              onClick={() =>
                token
                  ? handleAddToCart({ token, product })
                  : navigate("/signup")
              }
            >
              Add To Cart
            </button>
          </div>
        )}
      </div>

      <div className="wishlistCard__delete">
        <button className="wishlistCard__delete__icon">
          <Delete
            onClick={() =>
              handleDeleteProductFromWishlist({ token, productId: _id })
            }
          />
        </button>
      </div>
    </div>
  );
};
