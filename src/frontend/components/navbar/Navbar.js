import React from "react";
import { Favorite, ExitToAppRounded, ShoppingCart } from "@material-ui/icons";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../../features/authSlice";
import { USER_DATA, USER_TOKEN } from "../../constants/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const res = dispatch(signout());
    localStorage.removeItem(USER_TOKEN);
    localStorage.removeItem(USER_DATA);
    navigate("/");
    toast("Logged out");
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <img
            src="/assets/favicon.ico"
            alt="
          logo"
          ></img>
          <h1>Story Shop</h1>
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
            <li></li>
          </ul>
        </div>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="navbar__right">
          <Link to="/wishlist">
            <Favorite className="navbar__right__icon" />
          </Link>

          <Link to="/cart">
            <ShoppingCart className="navbar__right__icon" />
          </Link>

          <ExitToAppRounded
            onClick={() => handleLogout()}
            className="navbar__right__icon"
          />
        </div>
      </div>
    </>
  );
};
