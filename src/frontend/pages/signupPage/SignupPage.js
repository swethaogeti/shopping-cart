import React from "react";
import { Link } from "react-router-dom";
import "./formPage.css";
export const SignUpPage = () => {
  return (
    <div className="formPage">
      <form className="formPage__container">
        <h1>Sign Up</h1>
        <label for="firstname">First Name*</label>
        <input type="name" id="firstname" placeholder="Sweety"></input>

        <label for="lastname">Last Name*</label>
        <input type="name" id="lastname" placeholder="kate"></input>

        <label for="email">Email*</label>
        <input
          type="email"
          id="email"
          placeholder="sweety123@gmail.com"
        ></input>

        <label for="password">Password*</label>
        <input type="password" id="password"></input>
        <label for="confirm">Confirm Password*</label>
        <input type="password" id="confirm"></input>
        <button>Sign Up</button>
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
