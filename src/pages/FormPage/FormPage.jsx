import React from "react";
import logo from "../../assets/images/logo.svg";
function FormPage() {
  return (
    <div className="form__page">
      <img src={logo} className="logo" alt="logo-icon" />
      <h2 className="title">Request a demo</h2>
      <p className="details">Get connected with a 1:1 demo with sales</p>

      <p className="policy">
        By clicking continue, you agree to our{" "}
        <span className="policy__service">Terms of Service</span> and
        <span className="policy__privacy"> Privacy Policy</span>
      </p>
    </div>
  );
}

export default FormPage;
