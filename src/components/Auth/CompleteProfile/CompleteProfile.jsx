import React, { useState } from "react";
import error from "../../../assets/icons/error-24px.svg";
import Button from "../../common/Button/Button";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
function CompleteProfile() {
  const [addAddress, setAddAddress] = useState("");
  const [addPhoneNumber, setAddPhoneNumber] = useState("");
  const [addResidentialCom, setAddResidentialCom] = useState([]);
  const [errors, setError] = useState({
    addAddress: "",
    addPhoneNumber: "",
    addResidentialCom: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const { uid, displayName, email } = location.state || {};
  const baseUrl = import.meta.env.VITE_API_URL;
  const addUserUrl = `${baseUrl}/newUser`;
  const handleChangeAddAddress = (event) => {
    setAddAddress(event.target.value);
  };
  const handleChangeAddPhoneNumber = (event) => {
    setAddPhoneNumber(event.target.value);
  };

  const handleChangeAddResidentialCom = (event) => {
    setAddResidentialCom(event.target.value);
  };

  const phoneRegex = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/;
  const newError = () => {
    return {
      addAddress: addAddress.trim() ? "" : "Address is required!",
      addResidentialCom: addResidentialCom.trim()
        ? ""
        : "Residential Community is required!",
      addPhoneNumber: !addPhoneNumber.trim()
        ? "Phone number field is required!"
        : !phoneRegex.test(addPhoneNumber)
        ? "Phone number must be in format: +1 (919) 797-2875"
        : "",
    };
  };
  const handleReset = () => {
    setAddAddress("");
    setAddPhoneNumber("");
    setAddResidentialCom("");
    setError({
      addAddress: "",
      addPhoneNumber: "",
      addResidentialCom: "",
    });
  };

  const handleAdditionalForm = async (event) => {
    event.preventDefault();
    const validatorError = newError();
    setError(validatorError);
    if (Object.values(validatorError).some((errors) => errors)) {
      return;
    }

    try {
      console.log("Inside the try=++++++++++++++");
      const userAdditionalData = {
        uid: uid,
        user_name: displayName,
        address: addAddress,
        email: email,
        phone_number: addPhoneNumber,
        residential_community: addResidentialCom,
      };
      const response = await axios.post(addUserUrl, userAdditionalData);
      navigate(
        `/categories?fullName=${encodeURIComponent(
          displayName
        )}&residentialCom=${encodeURIComponent(addResidentialCom)}`
      );
      handleReset();
    } catch (error) {
      console.error("Error adding new user's info via Google Signup ", error);
      if (error.response && error.response.status === 400) {
        const message = error.response.data.message;
        if (message.includes("Email")) {
          setError((prev) => ({
            ...prev,
            email: message,
          }));
        }
        if (message.includes("Phone")) {
          setError((prev) => ({
            ...prev,
            addPhoneNumber: message,
          }));
        }
      }
    }
  };
  return (
    <form className="signup__form" onSubmit={handleAdditionalForm}>
      <div className="signup__form-property">
        <input
          type="text"
          value={addAddress}
          name="addAddress"
          onChange={handleChangeAddAddress}
          placeholder="Address"
          className={`signup__form-input ${errors.addAddress ? "invalid" : ""}`}
        />
        <div className={errors.addAddress ? "error__state" : ""}>
          {errors.addAddress && (
            <>
              <img src={error} alt="error-icon" className="error__icon" />
              <p className="error__message">This field is required</p>
            </>
          )}
        </div>
      </div>

      <div className="signup__form-property">
        <input
          type="text"
          value={addPhoneNumber}
          name="addPhoneNumber"
          onChange={handleChangeAddPhoneNumber}
          placeholder="Phone number"
          className={`signup__form-input ${
            error.addPhoneNumber ? "invalid" : ""
          }`}
        />
        <div className={errors.addPhoneNumber ? "error__state" : ""}>
          {errors.addPhoneNumber && (
            <>
              <img src={error} alt="error-icon" className="error__icon" />
              <p className="error__message">
                {errors.addPhoneNumber ||
                  " This field is required in format: +0 (000) 000-0000"}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="signup__form-property">
        <input
          type="text"
          value={addResidentialCom}
          name="addResidentialCom"
          onChange={handleChangeAddResidentialCom}
          placeholder="Residential Community"
          className={`signup__form-input ${
            error.addResidentialCom ? "invalid" : ""
          }`}
        />
        <div className={errors.addResidentialCom ? "error__state" : ""}>
          {errors.addResidentialCom && (
            <>
              <img src={error} alt="error-icon" className="error__icon" />
              <p className="error__message">This field is required</p>
            </>
          )}
        </div>
      </div>
      <Button btnType="signup" url="/signup" onClick={handleAdditionalForm} />
    </form>
  );
}

export default CompleteProfile;
