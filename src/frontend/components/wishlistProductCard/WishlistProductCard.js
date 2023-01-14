import { Delete, Favorite } from "@material-ui/icons";
import React from "react";
import "./wishlistProductCard.css";
export const WishlistProductCard = () => {
  return (
    <div className="wishlistCard">
      <div className="wishlistCard__img">
        <img
          src="https://m.media-amazon.com/images/I/81crzbSdrwL._AC_UY327_FMwebp_QL65_.jpg"
          alt="wishlist-product-img"
        ></img>
        <div className="wishlistCard__img__icon">
          <Favorite />
        </div>
      </div>

      <div className="wishlistCard__desp">
        <div>
          <h2>It ends with us</h2>
          <p>by Collen Hoover</p>
          <div className="wishlistCard__desp__price">
            <h2>₹2999</h2>
            <span>₹3999</span>
            <h3>25% Off</h3>
          </div>

          <p>
            with Atlas. Colleen Hoover tells sequel to the #1 Sunday Times
            bestseller It Ends with Us. with Atlas. Colleen Hoover tells sequel
            to the #1 Sunday Times bestseller It Ends with Us. with Atlas.
          </p>
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
