import "./CompleteProfilePage.scss";
import logo from "../../assets/images/logo.svg";
import CompleteProfile from "../../components/CompleteProfile/CompleteProfile";
import { Link } from "react-router-dom";
import ServiceTerms from "../../components/ServiceTerms/ServiceTerms";
import Header from "../../components/Header/Header";
function CompleteProfilePage() {
  return (
    <>
      <Header formType="signup" />
      <div className="form__page">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="logo-icon" />
        </Link>
        <div className="intro">
          <h2 className="title">Complete your profile</h2>
          <p className="details">
            We just need a few more details to complete your profile
          </p>
        </div>

        <CompleteProfile />

        <div className="policy">
          <p className="consent"> By clicking continue, you agree to our </p>

          <ServiceTerms />
        </div>
      </div>
    </>
  );
}

export default CompleteProfilePage;
