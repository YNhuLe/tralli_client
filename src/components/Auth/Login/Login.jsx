import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithPopup,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "../../../firebase/config";
import { useState, useEffect } from "react";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;
  const checkUserUrl = `${baseUrl}/check-user`;
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

  //check if user existing the backend
  const checkIfUserExists = async (uid, displayName, email, navigate) => {
    try {
      const response = await axios.get(`${checkUserUrl}/${uid}`);
      console.log("URL: ", response);
      console.log("UID: ", uid);
      const data = response.data;
      if (!data.exists) {
        console.log("User does not exists.", data.exists);
        navigate("/signup/complete-profile", {
          state: { uid, displayName, email },
        });
      } else {
        console.log("User exists");
        navigate("/categories");
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      // console.log("Redirecting to Google Sign-In...");
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("USER: ", user);
      console.log("User name: ", user.displayName);
      if (!user) {
        console.error("User not found after sign up!");
        return;
      }

      const { uid, displayName, email } = user;
      await checkIfUserExists(uid, displayName, email, navigate);

      // const userData = await response.data.json();
      // if (userData.exists) {
      //   navigate("/categories");
      // } else {
      //   navigate("/complete-profile", { state: { uid, displayName, email } });
      // }
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
