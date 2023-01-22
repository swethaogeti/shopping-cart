import axios from "axios";

export const removeProductFromCartService = async (token, productId) => {
  try {
    const data = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (err) {
    console.log(err.message);
    return;
  }
};
