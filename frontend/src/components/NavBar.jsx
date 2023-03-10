import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <button type="button" className="login-button">
        <Link to="/login">
          <CgProfile className="login" />
        </Link>
      </button>
    </div>
  );
}
