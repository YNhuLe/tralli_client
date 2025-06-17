import "./Button.scss";
import { Link, useNavigate } from "react-router-dom";
function Button({ btnType, url, onSubmit, onClick }) {
  const navigate = useNavigate();

  if (onSubmit || onClick) {
    return (
      <button
        className={`demo demo-btn ${
          btnType === "demo"
            ? "request-demo"
            : btnType === "upload_img"
            ? "upload-img"
            : btnType === "open_camera"
            ? "open-camera"
            : btnType === "signup"
            ? "sign-up"
            : btnType === "submit"
            ? "btn-submit"
            : btnType === "submit-job"
            ? "submit-job"
            : ""
        }`}>
        {btnType === "demo"
          ? "Request Demo"
          : btnType === "upload_img"
          ? "Upload an image or video"
          : btnType === "open_camera"
          ? "Open your camera application"
          : btnType === "signup"
          ? "Sign Up"
          : btnType === "submit"
          ? "Submit"
          : btnType === "submit-job"
          ? "Job Confirmation"
          : btnType === "signin"
          ? "Log In"
          : "Book a free demo"}
      </button>
    );
  }
  return (
    <Link to={url}>
      <button className="demo demo-btn">
        {btnType === "demo" ? "Request Demo" : "Book a free demo"}
      </button>
    </Link>
  );
}

export default Button;
