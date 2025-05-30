import React from "react";
import logo from "../../assets/images/logo.svg";
import DemoForm from "../../components/DemoForm/DemoForm";
import "./FormPage.scss";
import ServiceTerms from "../../components/common/ServiceTerms/ServiceTerms";
import Header from "../../components/common/Header/Header";
import { Link } from "react-router-dom";

function FormPage() {
  return (
    <>
      <Header formType="demo" />
      <div className="form__page">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="logo-icon" />
        </Link>
        <div className="intro">
          <h2 className="title">Request a demo</h2>
          <p className="details">Get connected with a 1:1 demo with sales</p>
        </div>
        <DemoForm />
        {/* <SignupForm /> */}
        <div className="policy">
          <p className="consent"> By clicking continue, you agree to our </p>
          <ServiceTerms />
        </div>
      </div>
    </>
  );
}

export default FormPage;
