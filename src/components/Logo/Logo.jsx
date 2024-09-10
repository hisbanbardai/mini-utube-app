import "./Logo.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <img className="logo-image" src={logo} alt="" />
    </Link>
  );
}
