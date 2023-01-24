import {
  FavoriteBorderOutlined,
  ShoppingCartRounded,
} from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../features/cartSlice";
import { moveProductToWishlist } from "../../features/wishlistSlice";
import "./productCard.css";

export const ProductCard = ({ product }) => {
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

  const handleMoveToWishlist = async (token, product) => {
    const res = await dispatch(moveProductToWishlist(token, product));
    console.log(res);
  };
  return (
    <div className="productCard" key={_id}>
      <div className="productCard__img">
        <img src={img} alt={title}></img>
        <div className="productCard__img__icon">
          <FavoriteBorderOutlined
            className="icon"
            onClick={() => handleMoveToWishlist({ token, product })}
          />
        </div>
      </div>

      <div className="productCard__details">
        <div className="productCard__details__desp">
          <h3>{title}</h3>
          <p>by {author}</p>
        </div>
        <div className="productCard__details__price">
          <h4>₹{discountedPrice}</h4>
          <span>₹{originalPrice}</span>
          <h3>{discount}% Off</h3>
        </div>

        <button onClick={() => handleAddToCart({ token, product })}>
          <ShoppingCartRounded />
          <h4>Go to Cart</h4>
        </button>
      </div>
    </div>
  );
};
