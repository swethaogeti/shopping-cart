import axios from "axios";

export const updateQuantityOfProductInCartService = async (
  token,
  productId,
  type
) => {
  try {
    const data = await axios.post(
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

    return data;
  } catch (err) {
    console.log(err.message);
    return;
  }
};
