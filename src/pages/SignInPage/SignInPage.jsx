import { Link } from "react-router-dom";
import "./SignInPage.scss";

import logo from "../../assets/images/logo.svg";
import SignIn from "../../components/Auth/SignIn/SignIn";
import ServiceTerms from "../../components/common/ServiceTerms/ServiceTerms";
import Header from "../../components/common/Header/Header";
import Login from "../../components/Auth/Login/Login";
function SignInPage() {
  return (
    <>
      <Header formType="signup" />
      <div className="form__page">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="logo-icon" />
        </Link>
        <div className="intro">
          <h2 className="title">Sign In</h2>
          <p className="details">Already have the account? Sign in here</p>
        </div>
        <SignIn />
        <div className="or">
          <span className="or__cross">or</span>
        </div>
        <Login />

        <p className="register__link">
          Don't Have An Account? <Link to="/signup">Register Now </Link>
        </p>
        <div className="policy">
          <p className="consent">By clicking continue, you agree to our</p>
          <ServiceTerms />
        </div>
      </div>
    </>
  );
}

export default SignInPage;
