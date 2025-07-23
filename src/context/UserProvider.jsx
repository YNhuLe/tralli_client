import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { getUserDetails } from "../api/userAPI";
const UserContext = createContext();
function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) {
      alert("You must log in to access this page!");
      navigate("/login");
      return;
    }
    try {
      const response = await getUserDetails(firebaseUser.uid);
      console.log("LOG: ", response.data);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  });
    return () => unsubscribe();
  }, [navigate]);
  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
export { UserProvider };
