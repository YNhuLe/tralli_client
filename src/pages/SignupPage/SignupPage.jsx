import "./SignupPage.scss";
import logo from "../../assets/images/logo.svg";
import SignupForm from "../../components/Auth/SignupForm/SignupForm";
import ServiceTerms from "../../components/common/ServiceTerms/ServiceTerms";
import Header from "../../components/common/Header/Header";
import { Link } from "react-router-dom";
import Login from "../../components/Auth/Login/Login";
function SignupPage() {
  return (
    <>
      <Header formType="signup" />
      <div className="form__page">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="logo-icon" />
        </Link>
        <div className="intro">
          <h2 className="title">Create an account</h2>
          <p className="details">Enter your email to sign up for Tralli</p>
        </div>

        <SignupForm />
        <div className="or">
          <span className="or__cross">or</span>
        </div>
        <Login />

        <div className="policy">
          <p className="consent"> By clicking continue, you agree to our </p>

          <ServiceTerms />
        </div>
      </div>
    </>
  );
}

export default SignupPage;
