import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithPopup,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "../../../src/firebase";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
function Login() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const checkUserAuth = async () => {
      try {
        // console.log("Checking if a user is logged in...");

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          // console.log("Auth state changed:", currentUser);
          setUser(currentUser);
        });

        // console.log("Fetching redirect result...");
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          // console.log("Google sign-in result:", result.user);
          setUser(result.user);
        }

        return () => unsubscribe();
      } catch (error) {
        // console.error("Error checking user authentication:", error);
      }
    };

    checkUserAuth();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      // console.log("Redirecting to Google Sign-In...");
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("USER: ", user);
      if (!user) {
        console.error("User not found after sign up!");
        return;
      }

      const { uid, displayName, email } = user;

      navigate("/categories");
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  return (
    <div className="google">
      {/* {user ? (
        <h2>Welcome, {user.displayName}!</h2>
      ) : ( */}
      <button onClick={handleGoogleLogin} className="google__btn ">
        {" "}
        <FcGoogle size={20} />
        Continue with Google
      </button>
      {/* )} */}
    </div>
  );
}

export default Login;
