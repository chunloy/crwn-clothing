import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";

import CartIcon from "../components/CartIcon";
import CartDropdown from "../components/CartDropdown";

import { signOutUser } from "../utils/firebaseUtils";
import { ReactComponent as Logo } from "../assets/crown.svg";

import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
