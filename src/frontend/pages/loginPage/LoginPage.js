import React from "react";
import { Link } from "react-router-dom";
import "./loginPage.css";

export const LoginPage = () => {
  return (
    <div className="formPage">
      <form className="formPage__container">
        <h1>login</h1>

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          placeholder="sweety123@gmail.com"
        ></input>

        <label htmlFor="password">Password*</label>
        <input type="password" id="password"></input>

        <button>Login</button>
        <button className="login">Login as a Guest</button>
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
