import { ShoppingCartRounded } from "@material-ui/icons";
import React from "react";
import "./productCard.css";
export const ProductCard = () => {
  return (
    <div className="productCard">
      <div className="productCard__img">
        <img src="https://m.media-amazon.com/images/I/81crzbSdrwL._AC_UY327_FMwebp_QL65_.jpg"></img>
      </div>

      <div className="productCard__details">
        <div className="productCard__details__desp">
          <h2>It end with us</h2>
          <p>by xyz kate</p>
        </div>
        <div className="productCard__details__price">
          <h2>₹2999</h2>
          <span>₹3999</span>
          <h3>25% Off</h3>
        </div>
        {/* <div> */}
        <button>
          <ShoppingCartRounded />
          <h3>Go to Cart</h3>
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};
