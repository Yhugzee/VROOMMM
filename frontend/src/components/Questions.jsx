import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Questions() {
  return (
    <Link to="/" className="Logo_content">
      <img src={logo} alt="Logo Vroommm" className="logo_vroommm" />
    </Link>
  );
}
