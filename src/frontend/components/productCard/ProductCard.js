import { ShoppingCartRounded } from "@material-ui/icons";
import React from "react";
import "./productCard.css";
export const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="productCard">
      <div className="productCard__img">
        <img src={product.img}></img>
      </div>

      <div className="productCard__details">
        <div className="productCard__details__desp">
          <h3>{product.title}</h3>
          <p>by xyz kate</p>
        </div>
        <div className="productCard__details__price">
          <h4>₹2999</h4>
          <span>₹3999</span>
          <h3>25% Off</h3>
        </div>
        {/* <div> */}
        <button>
          <ShoppingCartRounded />
          <h4>Go to Cart</h4>
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};
