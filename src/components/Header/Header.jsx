import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import { Link, Menu } from "lucide-react";
import Hero from "../Hero/Hero";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { ArrowLeftCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Header({ formType }) {
  const navigate = useNavigate();
  if (formType === "demo" || formType === "signup") {
    return (
      <>
        <div className="header">
          <button
            onClick={() => navigate(-1)}
            className="arrow"
            size={48}
            viewBox="0 0 48 48">
            <ArrowLeftCircle />
          </button>

          <BurgerMenu />
        </div>
      </>
    );
  } else if (formType === "landing") {
    return (
      <>
        <div className="header">
          <a href="./">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <BurgerMenu />
        </div>
        <Hero />
      </>
    );
  }
}

export default Header;
