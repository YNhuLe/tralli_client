import CategoriesList from "../../components/CategoriesList/CategoriesList";
import "./UserHomePage.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AltitudePic from "../../components/AltitudePic/AltitudePic";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
function UserHomePage() {
  const [user, setUser] = useState([]);
  const baseUrl = import.meta.env.VITE_API_URL;
  const userUrl = `${baseUrl}/user`;
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userName = params.get("fullName");
  const residentialCom = params.get("residentialCom");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await axios.get(userUrl);
        setUser(userResponse.data);
      } catch (error) {
        console.error(`Error fetching user: ${error}`);
      }
    };
    fetchUser();
  }, [userUrl]);

  if (user.length === 0) {
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
        <h1 className="categories__user">Welcome, {userName}</h1>
        <AltitudePic residentialCom={residentialCom} />
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
