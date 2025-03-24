import "./Footer.scss";
import logo from "../../assets/images/logo.svg";
import ServiceTerms from "../ServiceTerms/ServiceTerms";
function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <section>
        <a href="./">
          <img src={logo} alt="logo" className="footer__logo" />
        </a>
        <ul className="list">
          <li className="list__about">About</li>
          <li className="list__blog">Blog</li>
          <li className="list__login">Login</li>
          <li className="list__contact">Contact Us</li>
        </ul>
      </section>
      <section className="term">
        <p className="copy-right">© {date} Tralli Ltd. All rights reserved.</p>
        <ServiceTerms />
      </section>
    </footer>
  );
}

export default Footer;
