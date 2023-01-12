import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__left__logo">
            <img src="/assets/favicon.ico" alt="logo"></img>
            <h1>Story Shop</h1>
          </div>

          <div>
            <p>Copyright © 2023 Story Shop</p>
            <p>All rights reserved</p>
          </div>

          <div className="footer__left__icons">
            <Instagram className="footer__left__icon" />
            <LinkedIn className="footer__left__icon" />
            <GitHub className="footer__left__icon" />
          </div>
        </div>

        <div className="footer__right">
          <div className="footer__right__links">
            <h4>Sitemap</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Cart</li>
            </ul>
          </div>
          <div className="footer__right__links">
            <h4>Informative</h4>
            <ul>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer__right__email">
            <h4>Subscribe</h4>
            <input placeholder="Enter your email address"></input>
            <span>GO</span>
          </div>
        </div>
      </div>
    </div>
  );
};
