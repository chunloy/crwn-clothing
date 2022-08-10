import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { signOutUser } from "../utils/firebaseUtils";
import { ReactComponent as Logo } from "../assets/crown.svg"
import "./Navigation.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          {
            currentUser ? 
            <Link className="nav-link" to="/" onClick={signOutHandler}>Sign Out</Link> : 
            <Link className="nav-link" to="/auth">Sign In</Link>
          }
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;