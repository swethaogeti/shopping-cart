import { ShoppingCartRounded } from "@material-ui/icons";
import React from "react";
import "./productCard.css";
export const ProductCard = () => {
  return (
    <div className="productCard">
      <img src="https://edit.org/photos/editor/json/2021/09/30/a/2/a20ea9796751090ea0dba134de3d22e0_edit.org.jpg-376.jpg"></img>

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
