import { useState } from "react";

import errors from "../../../assets/icons/error-24px.svg";
import "./SignIn.scss";
import validator from "validator";
import Button from "../../common/Button/Button";
function SignIn() {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPass, setSigninPass] = useState("");
  const [signinErr, setSigninErr] = useState({
    signinEmail: "",
    signinPass: "",
  });

  const handleChangeSigninEmail = (event) => {
    setSigninEmail(event.target.value);
  };

  const handleChangeSigninPass = (event) => {
    setSigninPass(event.target.value);
  };

  const signinError = () => {
    return {
      signinEmail: !signinEmail.trim()
        ? "Email filed is required!"
        : !validator.isEmail(signinEmail)
        ? "Email must be in valid format"
        : "",
      signinPass: signinPass.trim() ? "" : "Password is required!",
    };
  };

  const handleResetForm = () => {
    setSigninEmail("");
    setSigninPass("");
    setSigninErr({
      signinPass: "",
      signinEmail: "",
    });
  };

  const handleSignin = async (event) => {
    event.preventDefault();
    const validatorError = signinError();
    setSigninErr(validatorError);
    if (Object.values(validatorError).some((error) => error)) {
      return;
    }

    try {
      Navigate(`
    /categories?displayName=${encodeURIComponent(displayName)}`);
      handleResetForm();
    } catch (error) {
      console.error("Can not sign in! ", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSignin}>
        <div>
          <input
            type="text"
            value={signinEmail}
            name="signinEmail"
            onChange={handleChangeSigninEmail}
            placeholder="Email"
            className={`signin__form-input ${
              signinErr.signinEmail ? "invalid" : ""
            }`}
          />
          <div className={signinErr.signinEmail ? "error__state" : ""}>
            {signinErr.signinEmail && (
              <>
                <img src={errors} alt="email-error" className="error__icon" />
                <p className="error__message">{signinErr.signinEmail}</p>
              </>
            )}
          </div>
        </div>

        <div>
          <input
            type="text"
            value={signinPass}
            name="signinPass"
            onChange={handleChangeSigninPass}
            placeholder="Password"
            className={`signin__form-input ${
              signinErr.signinPass ? "invalid" : ""
            }`}
          />

          <div className={signinErr.signinPass ? "error__state" : ""}>
            {signinErr.signinPass && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required!</p>
              </>
            )}
          </div>
        </div>
        <div className="redirect">
          <div>
            {/* <p className="forgot__pass">Remember me</p> */}
            <input type="checkbox" placeholder="Remember me" />
          </div>
          <a href="/" className="forgot__pass">
            Forgot your password?
          </a>
        </div>
        <Button btnType="signin" url="/" onClick={handleSignin} />
      </form>
    </>
  );
}

export default SignIn;
