import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./signUpPage.css";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../../features/authSlice";

import { USER_DATA, USER_TOKEN } from "../../constants/constants";

export const SignUpPage = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignUp = async (e, user) => {
    e.preventDefault();
    const response = await dispatch(signup(user));
    console.log(JSON.stringify(response.payload.createdUser));
    if (response?.payload?.encodedToken) {
      localStorage.setItem(USER_TOKEN, response.payload.encodedToken);
      localStorage.setItem(
        USER_DATA,
        JSON.stringify(response.payload.createdUser)
      );
      navigate(from, { replace: true });
      toast("You have successfully signed Up");
    } else {
      toast("Sign Up Failed");
    }
  };

  return (
    <div className="formPage">
      <form
        className="formPage__container"
        onSubmit={(e) => handleSignUp(e, user)}
      >
        <h1>Sign Up</h1>
        <label htmlFor="firstname">First Name*</label>
        <input
          type="name"
          id="firstname"
          placeholder="Sweety"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        ></input>
        <label htmlFor="lastname">Last Name*</label>
        <input
          type="name"
          id="lastname"
          placeholder="kate"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        ></input>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          placeholder="sweety123@gmail.com"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        {/* <label htmlFor="confirm">Confirm Password*</label>
        <input type="password" id="confirm"></input> */}
        <button>Sign Up</button>
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

        <p>
          Existing user?{" "}
          <Link to="/login" className="formPage__container__link">
            Login here!
          </Link>
        </p>
      </form>
    </div>
  );
};
