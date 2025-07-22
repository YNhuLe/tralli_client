import validator from "validator";
const phoneRegex = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/;
export const validateProfileFields = ({
  fullName,
  email,
  password,
  confirmedPass,
  phoneNumber,
  residentialCom,
  address,
}) => ({
  fullName: fullName.trim() ? "" : "Full name is required!",
  residentialCom:
    typeof residentialCom === "string" && residentialCom.trim()
      ? ""
      : "Residential Community is required!",
  address: address.trim() ? "" : "Address is required!",
  password: password.trim() ? "" : "Password is required!",
  confirmedPass: confirmedPass.trim() ? "" : "Confirmed password is required!",
  phoneNumber: !phoneNumber.trim()
    ? "Phone number field is required!"
    : !phoneRegex.test(phoneNumber)
    ? "Phone number must be in format: +1 (919) 797-2875"
    : "",
  email: !email.trim()
    ? "Email field is required!"
    : !validator.isEmail(email)
    ? "Email must be valid"
    : "",
});
