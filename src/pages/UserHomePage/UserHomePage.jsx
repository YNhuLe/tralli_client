import CategoriesList from "../../components/CategoriesList/CategoriesList";
import "./UserHomePage.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AltitudePic from "../../components/AltitudePic/AltitudePic";
import Button from "../../components/common/Button/Button";
import Header from "../../components/common/Header/Header";
import TradeRequirementsPage from "../TradeRequirementsPage/TradeRequirementsPage";
import { getUserDetails } from "../../api/userAPI";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import firebase from "firebase/compat/app";
function UserHomePage() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL;
  const userUrl = `${baseUrl}/user`;
  const location = useLocation();
  const navigate = useNavigate();
  // const { userName, residentialCom } = location.state || {};

  // useEffect(() => {
  //   if (!location.state) {
  //     alert("You must log in to access to this page!");
  //     navigate("/login");
  //   }
  // }, [location.state, navigate]);
  console.log("User: ", user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log("firebase working");
      if (!firebaseUser) {
        alert("You must log into access this page");
        navigate("/login");
        return;
      }
      console.log("UID check: ", firebaseUser.uid);

      try {
        const response = await getUserDetails(firebaseUser.uid);
        console.log("LOG: ", response);
        setUser(response.data);
        // setUser({
        //   userName: "we",
        //   residentialCom: "Sheridan PArk",
        // });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user: ", error);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);
  // const UID = location.uid;
  // console.log("Location state:", location.state);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const userResponse = await getUserDetails(UID);
  //       console.log("Response: ", userResponse);
  //       setUser(userResponse.data);
  //     } catch (error) {
  //       console.error(`Error fetching user: ${error}`);
  //     }
  //   };
  //   fetchUser();
  // }, [userUrl]);
  console.log(auth.currentUser);
  if (loading || !user) {
    return <h1>Loading users..</h1>;
  }

  const handleUploadPic = () => {
    console.log("Load pictures");
  };
  const handleOpenCamera = () => {
    console.log("Open camera");
  };
  return (
    <>
      <section className="categories__section">
        <Header formType="signup" />
        <h1 className="categories__user">Welcome, {user.userName}</h1>
        <AltitudePic residentialCom={user.residentialCom} />
        <h2 className="search">Starting your search</h2>
        <CategoriesList />
        <h2 className="issue">Can't find any issue here?</h2>
        <form className="search">
          <input
            className="search__input search__input-icon"
            type="text"
            name="search"
            placeholder="Describe your issue at home"
          />
        </form>
        <Button btnType="upload_img" onClick={handleUploadPic} />
        <Button btnType="open_camera" onClick={handleOpenCamera} />
      </section>
    </>
  );
}

export default UserHomePage;
