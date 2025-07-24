import { useState } from "react";
import "./SignupForm.scss";
import errors from "../../../assets/icons/error-24px.svg";
import Button from "../../common/Button/Button";
import axios from "axios";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { validateProfileFields } from "../../../utils/validator";
import useTogglePassword from "../../../hooks/useTogglePassword";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPass, setConfirmedPass] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [residentialCom, setResidentialCom] = useState([]);
  const navigate = useNavigate();

  const [error, setError] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmedPass: "",
    phoneNumber: "",
    residentialCom: "",
    address: "",
  });
  const {
    inputType: inputType1,
    togglePassword: togglePassword1,
    showPassword: showPassword1,
  } = useTogglePassword();

  const {
    inputType: inputType2,
    togglePassword: togglePassword2,
    showPassword: showPassword2,
  } = useTogglePassword();
  const baseUrl = import.meta.env.VITE_API_URL;

  const addUserUrl = `${baseUrl}/newUser`;
  const handleChangeFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeConfirmedPass = (event) => {
    setConfirmedPass(event.target.value);
  };

  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleChangeResidentialCom = (event) => {
    setResidentialCom(event.target.value);
  };
  const newError = () => {
    return {
      ...validateProfileFields({
        fullName,
        email,
        password,
        confirmedPass,
        phoneNumber,
        residentialCom,
        address,
      }),
    };
  };

  const handleReset = () => {
    setFullName("");
    setAddress("");
    setPassword("");
    setConfirmedPass("");
    setPhoneNumber("");
    setResidentialCom("");
    setError({
      fullName: "",
      address: "",
      password: "",
      confirmedPass: "",
      phoneNumber: "",
      residentialCom: "",
    });
  };
  const handleSignup = async (event) => {
    event.preventDefault();
    const validatorError = newError();
    setError(validatorError);
    if (Object.values(validatorError).some((error) => error)) {
      return;
    }

    try {
      const auth = getAuth();

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      const userData = {
        uid: user.uid,
        user_name: fullName,
        address: address,
        email: email,
        phone_number: phoneNumber,
        residential_community: residentialCom,
      };
      const response = await axios.post(
        addUserUrl,

        userData
      );

      // navigate(
      //   `/categories?fullName=${encodeURIComponent(
      //     fullName
      //   )}&residentialCom=${encodeURIComponent(residentialCom)}`
      // );

      navigate("/categories", {
        state: {
          userName: fullName,
          residentialCom: residentialCom,
          uid: user.uid,
        },
      });

      handleReset();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const message = error.response.data.message;
        if (message.includes("Email")) {
          setError((prev) => ({
            ...prev,
            // businessEmail: error.response.data.message,
            email: message,
          }));
        } else if (message.includes("Phone")) {
          setError((prev) => ({
            ...prev,
            phoneNumber: message,
          }));
        }
      }
      console.error("Error adding new user to the users database: ", error);
    }
  };
  return (
    <>
      <form className="signup__form" onSubmit={handleSignup}>
        <div className="signup__form-property">
          <input
            type="text"
            value={fullName}
            name="fullName"
            onChange={handleChangeFullName}
            placeholder="Full Name"
            className={`signup__form-input ${error.fullName ? "invalid" : ""}`}
          />
          <div className={error.fullName ? "error__state" : ""}>
            {error.fullName && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="signup__form-property">
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChangeEmail}
            placeholder="Email"
            className={`signup__form-input ${error.email ? "invalid" : ""}`}
          />
          <div className={error.email ? "error__state" : ""}>
            {error.email && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">{error.email}</p>
              </>
            )}
          </div>
        </div>

        <div className="signup__form-property">
          <div className="input-wrapper">
            <input
              type={inputType1}
              value={password}
              name="password"
              onChange={handleChangePassword}
              placeholder="Password"
              className={`signup__form-input ${
                error.password ? "invalid" : ""
              }`}
            />
            <span onClick={togglePassword1} className="input-icon">
              {showPassword1 ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className={error.password ? "error__state" : ""}>
            {error.password && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="signup__form-property">
          <div className="input-wrapper">
            <input
              type={inputType2}
              value={confirmedPass}
              name="confirmedPass"
              onChange={handleChangeConfirmedPass}
              placeholder="Confirmed Password"
              className={`signup__form-input ${
                error.confirmedPass ? "invalid" : ""
              }`}
            />
            <span onClick={togglePassword2} className="input-icon">
              {showPassword2 ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className={error.confirmedPass ? "error__state" : ""}>
            {error.confirmedPass && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="signup__form-property">
          <input
            type="text"
            value={address}
            name="address"
            onChange={handleChangeAddress}
            placeholder="Address"
            className={`signup__form-input ${error.email ? "invalid" : ""}`}
          />
          <div className={error.address ? "error__state" : ""}>
            {error.address && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="signup__form-property">
          <input
            type="text"
            value={phoneNumber}
            name="phoneNumber"
            onChange={handleChangePhoneNumber}
            placeholder="Phone Number"
            className={`signup__form-input ${
              error.phoneNumber ? "invalid" : ""
            }`}
          />
          <div className={error.phoneNumber ? "error__state" : ""}>
            {error.phoneNumber && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">
                  {error.phoneNumber ||
                    "This field is required in format: +0 (000) 000-0000"}
                </p>
              </>
            )}
          </div>
        </div>

        <div className="signup__form-property">
          <input
            type="text"
            value={residentialCom}
            name="residentialCom"
            onChange={handleChangeResidentialCom}
            placeholder="Residential Community"
            className={`signup__form-input ${
              error.residentialCom ? "invalid" : ""
            }`}
          />
          <div className={error.residentialCom ? "error__state" : ""}>
            {error.residentialCom && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>
        <Button btnType="signup" url="/signup" onClick={handleSignup} />
      </form>
    </>
  );
}

export default SignupForm;
