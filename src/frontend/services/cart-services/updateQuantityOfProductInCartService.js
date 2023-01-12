import axios from "axios";

export const updateQuantityOfProductInCartService = async (
  token,
  productId
) => {
  try {
    const { data } = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type,
        },
      },

      {
        headers: {
          authorization: token,
        },
      }
    );

    return data.cart;
  } catch (err) {
    console.log(err.message);
    return;
  }
};
