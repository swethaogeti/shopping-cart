import axios from "axios";

export const loginService = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/login", {
      email: user.email,
      password: user.password,
    });
    return data.encodedToken;
  } catch (err) {
    console.log(err.message);
    return;
  }
};
