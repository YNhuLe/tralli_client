import { useState } from "react";

function useTogglePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const inputType = showPassword ? "text" : "password";
  const toggleIcon = showPassword ? "show" : "hide";

  return { inputType, togglePassword, toggleIcon, showPassword };
}

export default useTogglePassword;
