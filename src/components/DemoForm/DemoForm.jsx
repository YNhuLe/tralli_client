import { useState } from "react";
import "./DemoForm.scss";

function DemoForm() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");

  const [error, setError] = useState({
    fName: "",
    lName: "",
    company: "",
    jobTitle: "",
    businessEmail: "",
  });

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
      businessEmail: businessEmail.trim() ? "" : "Business email is required!",
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
  };
  return <div></div>;
}

export default DemoForm;
