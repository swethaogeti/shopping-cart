import axios from "axios";

export const signUpService = async (user) => {
  try {
    const data = await axios.post("/api/auth/signup", user);

    return data;
  } catch (err) {
    console.log(err.message);
    return;
  }
};
