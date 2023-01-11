import React from "react";
import { Person, SearchRounded, ShoppingCart } from "@material-ui/icons";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <h1>SHOPPY</h1>
        </div>
        <div className="navbar__center">
          <ul>
            <li>
              <Link to="/" className="navbar__center__link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="navbar__center__link">
                Products
              </Link>
            </li>
            <li>
              <Link to="/" className="navbar__center__link">
                About Us
              </Link>
            </li>
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
