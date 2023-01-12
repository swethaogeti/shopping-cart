import { ShoppingCartRounded } from "@material-ui/icons";
import React from "react";
import "./productCard.css";
export const ProductCard = () => {
  return (
    <div className="productCard">
      <div className="productCard__img">
        <img src="https://m.media-amazon.com/images/I/61LsaxVQ4iL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"></img>
      </div>

      <div className="productCard__details">
        <div>
          <h1>It end with us</h1>
          <p>by xyz kate</p>
        </div>
        <div>
          <h2>₹2999</h2>
          <span>₹3999</span>
          <h3>25% Off</h3>
        </div>
        <div>
          <button>
            <ShoppingCartRounded />
            <h3>Go to Cart</h3>
          </button>
        </div>
      </div>
    </div>
  );
};
