import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../firebase/config";
import axios from "axios";
import errors from "../../../assets/icons/error-24px.svg";
import "./SignIn.scss";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useTogglePassword from "../../../hooks/useTogglePassword";
function SignIn() {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPass, setSigninPass] = useState("");
  const navigate = useNavigate();
  const [signinErr, setSigninErr] = useState({
    signinEmail: "",
    signinPass: "",
  });
  const { inputType, togglePassword, showPassword } = useTogglePassword();
  const baseUrl = import.meta.env.VITE_API_URL;
  const checkUserUrl = `${baseUrl}/check-user`;
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
    await handleEmailPasswordLogin(signinEmail, signinPass);
    handleResetForm();
    // try {
    //   navigate(`
    // /categories?displayName=${encodeURIComponent(displayName)}`);
    //   // handleResetForm();
    // } catch (error) {
    //   console.error("Can not sign in! ", error);
    // }
  };

  const handleEmailPasswordLogin = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password.trim()
      );
      const user = result.user;
      const { uid, displayName, email: signinEmail } = user;
      await checkIfUserExists(uid, displayName, signinEmail, navigate);
    } catch (error) {
      console.error(
        "Can not log in using email and password",
        error.code,
        error.message
      );
      setSigninErr((prev) => ({
        ...prev,
        signinPass: translateFirebaseError(error.code),
      }));
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const { uid, displayName, email } = user;
      await checkIfUserExists(uid, displayName, email, navigate);
    } catch (error) {
      console.error("can not sign in using Google account!");
    }
  };

  const checkIfUserExists = async (uid, displayName, email, navigate) => {
    try {
      const res = await axios.get(`${checkUserUrl}/${uid}`);
      const data = res.data;
      console.log("DATA:", data);
      //user is not sign up yet, navigate to complete-profile form
      if (!data.exists) {
        navigate("/signup/complete-profile", {
          state: { uid, displayName, email },
        });
      } else {
        navigate("/categories"); //user already signed up => navigate to main page
      }
    } catch (error) {
      console.error("Error checking user exists? ", error.message);
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
            type={inputType}
            value={signinPass}
            name="signinPass"
            onChange={handleChangeSigninPass}
            placeholder="Password"
            className={`signin__form-input ${
              signinErr.signinPass ? "invalid" : ""
            }`}
          />

          <span onClick={togglePassword} className="input-icon">
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>

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
