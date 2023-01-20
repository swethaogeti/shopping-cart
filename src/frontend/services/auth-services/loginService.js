import axios from "axios";

export const loginService = async (user) => {
  try {
    const data = await axios.post("/api/auth/login", user);
    return data;
  } catch (err) {
    console.log(err.message);
    return;
  }
};
