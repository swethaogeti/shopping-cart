import {
  FavoriteBorderOutlined,
  Favorite,
  ShoppingCartRounded,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addProductToCart, getCartProducts } from "../../features/cartSlice";
import {
  getWishlistProducts,
  moveProductToWishlist,
  removeProductFromWishlist,
} from "../../features/wishlistSlice";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleAddToCart = async (token, product) => {
    const res = await dispatch(addProductToCart(token, product));
  };

  const handleMoveToWishlist = async (token, product) => {
    const res = await dispatch(moveProductToWishlist(token, product));
    console.log(res);
  };

  const handleDeleteProductFromWishlist = async (token, productId) => {
    const res = await dispatch(removeProductFromWishlist(token, productId));
  };
  return (
    <div className="productCard" key={_id}>
      <div className="productCard__img">
        <img src={img} alt={title}></img>

        {wishlist.find((wishlistProduct) => wishlistProduct._id === _id) ? (
          <div className="productCard__img__icon">
            <Favorite
              className="wishlist__red"
              onClick={() =>
                handleDeleteProductFromWishlist({ token, productId: _id })
              }
            />
          </div>
        ) : (
          <div className="productCard__img__icon">
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

        {cart.find((cartProduct) => cartProduct._id === _id) ? (
          <button className="btn__cart" onClick={() => navigate("/cart")}>
            <h4>Go To Cart</h4>
          </button>
        ) : (
          <button
            onClick={() =>
              token ? handleAddToCart({ token, product }) : navigate("/signup")
            }
          >
            <ShoppingCartRounded />

            <h4>Add To Cart</h4>
          </button>
        )}
      </div>
    </div>
  );
};
