import axios from "axios";

export const getProductsServices = async () => {
  try {
    const data = await axios.get("/api/products");

    return data;
  } catch (err) {
    console.error(err.message);
    return;
  }
};
