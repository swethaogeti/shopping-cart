import axios from "axios";

export const moveProductToWishlistService = async (token, product) => {
  console.log(product);
  try {
    const data = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
    return;
  }
};

// try {
//   const data = await axios.post(
//     "/api/user/cart",
//     { product },
//     {
//       headers: { authorization: token },
//     }
//   );
//   return data;
// } catch (err) {
//   console.log(err.message);
//   return;
// }
