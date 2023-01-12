import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <img className="logo" alt="vroommm logo" src="./src/assets/logo.png" />
      <div className="login-button">
        <Link to="/login">
          <FiLogIn className="login" />
        </Link>
      </div>
    </nav>
  );
}
