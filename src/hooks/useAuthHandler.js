import { useNavigate } from "react-router-dom";
import axios from "axios";
import { auth, googleProvider } from "../firebase/config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

function useAuthHandler() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const checkUserUrl = `${baseUrl}/check-user`;

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
  return <div>useAuthHandler</div>;
}

export default useAuthHandler;
