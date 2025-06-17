import { useState } from "react";
import validator from "validator";
import "./DemoForm.scss";
import errors from "../../assets/icons/error-24px.svg";
import Button from "../common/Button/Button";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { X } from "lucide-react";
import checkmark from "../../assets/icons/confirm-checkmark.svg";
import ReactModal from "react-modal";
import Header from "../common/Header/Header";
ReactModal.setAppElement("#root");
function DemoForm() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [error, setError] = useState({
    fName: "",
    lName: "",
    company: "",
    jobTitle: "",
    businessEmail: "",
  });
  const baseUrl = import.meta.env.VITE_API_URL;
  console.log("Base URL: ", baseUrl);

  const addDemoUrl = `${baseUrl}/demo`;
  console.log("Base URL: ", addDemoUrl);
  const navigate = useNavigate();
  const handleChangeFName = (event) => {
    setFName(event.target.value);
  };

  const handleChangeLName = (event) => {
    setLName(event.target.value);
  };

  const handleChangeCompany = (event) => {
    setCompany(event.target.value);
  };

  const handleChangeJobTitle = (event) => {
    setJobTitle(event.target.value);
  };
  const handleChangeBusinessEmail = (event) => {
    setBusinessEmail(event.target.value);
  };

  const handleRequestDemo = async (event) => {
    event.preventDefault();
    const newError = {
      fName: fName.trim() ? "" : "First name is required!",
      lName: lName.trim() ? "" : "Last name is required!",
      company: company.trim() ? "" : "Company is required!",
      jobTitle: jobTitle.trim() ? "" : "Job title is required!",
      businessEmail: !businessEmail.trim()
        ? "Business email is required!"
        : !validator.isEmail(businessEmail)
        ? "Email must be in a valid format (e.g., example@domain.com)"
        : "",
    };

    setError(newError);
    if (
      newError.fName ||
      newError.lName ||
      newError.company ||
      newError.jobTitle ||
      newError.businessEmail
    ) {
      return;
    }

    try {
      const response = await axios.post(addDemoUrl, {
        first_name: fName,
        last_name: lName,
        job_title: jobTitle,
        business_email: businessEmail,
        company: company,
      });

      setIsModalOpen(true);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError((prev) => ({
          ...prev,
          businessEmail: error.response.data.message,
        }));
      }
      console.error("Error adding new user to the demo database: ", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    handleReset();
    navigate("/");
  };
  const handleReset = () => {
    setFName("");
    setLName("");
    setCompany("");
    setBusinessEmail("");
    setJobTitle("");
    setError({
      fName: "",
      lName: "",
      company: "",
      businessEmail: "",
      jobTitle: "",
    });
  };
  return (
    <>
      <form className="demo__form" onSubmit={handleRequestDemo}>
        <div className="demo__form-property">
          <input
            type="text"
            value={fName}
            name="fName"
            onChange={handleChangeFName}
            placeholder="First Name"
            className={`demo__form-input ${error.fName ? "invalid" : ""}`}
          />
          <div className={error.fName ? "error__state" : ""}>
            {error.fName && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="demo__form-property">
          <input
            type="text"
            value={lName}
            name="lName"
            onChange={handleChangeLName}
            placeholder="Last Name"
            className={`demo__form-input ${error.lName ? "invalid" : ""}`}
          />
          <div className={error.lName ? "error__state" : ""}>
            {error.lName && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="demo__form-property">
          <input
            type="text"
            value={company}
            name="company"
            onChange={handleChangeCompany}
            placeholder="Company"
            className={`demo__form-input ${error.company ? "invalid" : ""}`}
          />
          <div className={error.company ? "error__state" : ""}>
            {error.company && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="demo__form-property">
          <input
            type="text"
            value={jobTitle}
            name="jobTitle"
            onChange={handleChangeJobTitle}
            placeholder="Job Title"
            className={`demo__form-input ${error.jobTitle ? "invalid" : ""}`}
          />
          <div className={error.jobTitle ? "error__state" : ""}>
            {error.jobTitle && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="demo__form-property">
          <input
            type="text"
            value={businessEmail}
            name="businessEmail"
            onChange={handleChangeBusinessEmail}
            placeholder="Business Email"
            className={`demo__form-input ${
              error.businessEmail ? "invalid" : ""
            }`}
          />
          <div className={error.businessEmail ? "error__state" : ""}>
            {error.businessEmail && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">{error.businessEmail}</p>
              </>
            )}
          </div>
        </div>
        <Button btnType="demo" url="/demo" onSubmit={handleRequestDemo} />
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <button onClick={closeModal} className="modal__close">
              <X size={24} />
            </button>
            <div className="modal__demo">
              <img
                src={checkmark}
                alt="check-mark"
                className="demo__checkmark"
              />
              <h1 className="demo__confirm">You're in, {fName}!</h1>
              <p className="demo__connect">
                Our sales team will connect with you directly to set-up some
                time. In the meantime, feel free to stay connected with us.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DemoForm;
