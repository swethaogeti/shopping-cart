import React from "react";
import { Favorite, ExitToAppRounded, ShoppingCart } from "@material-ui/icons";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../features/authSlice";
import { USER_DATA, USER_TOKEN } from "../../constants/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

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
          <Link to="/" className="navbar__left__link">
            <h1>Story Shop</h1>
          </Link>
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
            {token && wishlist.length > 0 ? (
              <div className="navbar__right__box">
                <Favorite className="navbar__right__icon" />
                <div className="count__icon">
                  <p>{wishlist.length}</p>
                </div>
              </div>
            ) : (
              <Favorite className="navbar__right__icon" />
            )}
          </Link>

          <Link to="/cart">
            {token && cart.length > 0 ? (
              <div className="navbar__right__box">
                <ShoppingCart className="navbar__right__icon" />
                <div className="count__icon">
                  <p>{cart.length}</p>
                </div>
              </div>
            ) : (
              <ShoppingCart className="navbar__right__icon" />
            )}
          </Link>

          {token ? (
            <ExitToAppRounded
              onClick={() => handleLogout()}
              className="navbar__right__icon"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
