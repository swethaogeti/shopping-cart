import React from "react";
import { Person, SearchRounded, ShoppingCart } from "@material-ui/icons";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <h1>SHOPPY</h1>
        </div>
        <div className="navbar__center">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="navbar__right">
          <SearchRounded className="navbar__right__icon" />
          <ShoppingCart className="navbar__right__icon" />
          <Person className="navbar__right__icon" />
        </div>
      </div>
    </>
  );
};
