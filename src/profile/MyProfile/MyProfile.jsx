import { useState } from "react";
import "./MyProfile.scss";
function MyProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [error, setError] = useState({
      fullName: "",
      email: "",
      phoneNumber: "",
    });
    const handleChangeFullName = (event) => {
      setFullName(event.target.value);
    };
    const handleChangeEmail = (event) => {
      setEmail(event.target.value);
    };
    const handleChangePhoneNumber = (event) => {
      setPhoneNumber(event.target.value);
    };
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    };

    return (
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Complete Your Profile</h2>
          <div className="profile__pic">
            <label>
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="profile__img" />
              ) : (
                <span className="profile__text"> Add Profile Picture</span>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
            </label>
          </div>
        </div>

        <div className="profile__fields">
          <div>
            <label> Full Name</label>
            <input
              type="text"
              // value={}
            />
          </div>
        </div>
      </section>
    );
}

export default MyProfile;
