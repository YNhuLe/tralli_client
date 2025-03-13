import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import { Menu } from "lucide-react";
import Hero from "../Hero/Hero";

function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <Menu className="menu" />
      </div>
      <Hero />
    </>
  );
}

export default Header;
