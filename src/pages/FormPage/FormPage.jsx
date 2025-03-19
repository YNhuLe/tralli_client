import React from "react";
import logo from "../../assets/images/logo.svg";
import DemoForm from "../../components/DemoForm/DemoForm";
import "./FormPage.scss";
import ServiceTerms from "../../components/ServiceTerms/ServiceTerms";
function FormPage() {
  return (
    <div className="form__page">
      <img src={logo} className="logo" alt="logo-icon" />
      <div className="intro">
        <h2 className="title">Request a demo</h2>
        <p className="details">Get connected with a 1:1 demo with sales</p>
      </div>
      <DemoForm />
      <div className="policy">
        <p className="consent"> By clicking continue, you agree to our </p>
        <span className="policy__privacy"> Privacy Policy</span>
        <ServiceTerms />
      </div>
    </div>
  );
}

export default FormPage;
