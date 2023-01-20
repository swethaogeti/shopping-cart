import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { USER_DATA, USER_TOKEN } from "../../constants/constants";
import { login } from "../../features/authSlice";
import "./loginPage.css";

export const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = async (user) => {
    const response = await dispatch(login(user));
    if (response?.payload?.encodedToken) {
      localStorage.setItem(USER_TOKEN, response.payload.encodedToken);
      localStorage.setItem(
        USER_DATA,
        JSON.stringify(response.payload.foundUser)
      );
      toast("Login successful");
      navigate(from, { replace: true });
    } else {
      toast("Login Failed");
    }
  };

  return (
    <div className="formPage">
      <form
        className="formPage__container"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(user);
        }}
      >
        <h1>login</h1>

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="sweety123@gmail.com"
        ></input>

        <label htmlFor="password">Password*</label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <button>Login</button>
        <button
          className="login"
          onClick={(e) => {
            e.preventDefault();
            setUser({ email: "sweety@gmail.com", password: "sweety555" });
            handleLogin({ email: "sweety@gmail.com", password: "sweety555" });
          }}
        >
          Login as a Guest
        </button>
        <p>
          New here?{" "}
          <Link to="/signup" className="formPage__container__link">
            create an account!
          </Link>
        </p>
      </form>
    </div>
  );
};
