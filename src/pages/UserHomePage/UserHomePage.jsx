import CategoriesList from "../../components/CategoriesList/CategoriesList";
import "./UserHomePage.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AltitudePic from "../../components/AltitudePic/AltitudePic";
import Button from "../../components/common/Button/Button";
import Header from "../../components/common/Header/Header";
import { getUserDetails } from "../../api/userAPI";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
function UserHomePage() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        alert("You must log into access this page");
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
        <h1 className="categories__user">
          Welcome, {user?.user_name || "Guest"}
        </h1>
        <AltitudePic
          residentialCom={user?.residential_community || "Residence"}
        />
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
