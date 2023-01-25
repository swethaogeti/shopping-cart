import { Delete, Favorite } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleAddToCart = async (token, product) => {
    const res = await dispatch(addProductToCart(token, product));
  };
  const handleDeleteProductFromWishlist = async (token, productId) => {
    const res = await dispatch(removeProductFromWishlist(token, productId));
  };

  return (
    <div className="wishlistCard">
      <div className="wishlistCard__img">
        <img src={img} alt="wishlist-product-img"></img>
        <div className="wishlistCard__img__icon">
          <Favorite
            onClick={() =>
              handleDeleteProductFromWishlist({ token, productId: _id })
            }
          />
        </div>
      </div>

      <div className="wishlistCard__desp">
        <div>
          <h2>{title}</h2>
          <p>by {author}</p>
          <div className="wishlistCard__desp__price">
            <h2>₹{discountedPrice}</h2>
            <span>₹{originalPrice}</span>
            <h3>{discount}% Off</h3>
          </div>

          <p>{description}</p>
        </div>

        <div className="wishlistCard__desp__btn">
          <button onClick={() => handleAddToCart({ token, product })}>
            Add To Cart
          </button>
        </div>
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
