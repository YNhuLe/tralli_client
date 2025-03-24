import "./LoginForm.scss";

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const [error, setError] = useState({
    loginEmail: "",
    loginPass: "",
  });

  const handleChangeLoginEmail = (event) => {
    setLoginEmail(event.target.value);
  };

  const handleChangeLoginPass = (event) => {
    setLoginPass(event.target.value);
  };
  const newError = () => {
    return {
      loginEmail: loginEmail.trim() ? "" : "Email is required to login!",
      loginPass: loginPass.trim() ? "" : "Password is required for login!",
    };
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(newError);
    if (newError.confirmedEmail || newError.confirmedPass) {
      return;
    }
  };
  return <div>LoginForm</div>;
}

export default LoginForm;
