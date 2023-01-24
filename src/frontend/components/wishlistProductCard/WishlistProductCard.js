import { Delete, Favorite } from "@material-ui/icons";
import React from "react";
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

  return (
    <div className="wishlistCard">
      <div className="wishlistCard__img">
        <img src={img} alt="wishlist-product-img"></img>
        <div className="wishlistCard__img__icon">
          <Favorite />
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
          <button>Add To Cart</button>
        </div>
      </div>

      <div className="wishlistCard__delete">
        <button className="wishlistCard__delete__icon">
          <Delete />
        </button>
      </div>
    </div>
  );
};
