import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WishlistProductCard } from "../../components";
import { getWishlistProducts } from "../../features/wishlistSlice";
import "./wishlistPage.css";
export const WishlistPage = () => {
  const { token } = useSelector((state) => state.auth);
  const { wishlist } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishlistProducts(token));
  }, []);
  return (
    <div className="wishlist">
      <div className="wishlist__products">
        {wishlist.length > 0 ? (
          wishlist.map((product) => {
            return <WishlistProductCard product={product} />;
          })
        ) : (
          <h2>your Wishlist is Empty</h2>
        )}
      </div>
    </div>
  );
};
