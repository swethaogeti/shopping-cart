import axios from "axios";

export const signUpService = async (user) => {
  try {
    const data = await axios.post("/api/auth/signup", user);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
    return;
  }
};
