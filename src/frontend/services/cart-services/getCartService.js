import axios from "axios";

export const getCartService = async (token) => {
  try {
    const { data } = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });
    return data.cart;
  } catch (err) {
    console.log(err.message);
    return;
  }
};
