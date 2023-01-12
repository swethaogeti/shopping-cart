import axios from "axios";

export const removeProductFromWishlistService = async (token, productId) => {
  try {
    const { data } = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    return data.wishlist;
  } catch (err) {
    console.log(err.message);
  }
};
