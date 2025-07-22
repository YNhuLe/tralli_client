import { useState } from "react";
import "./MyProfile.scss";
function MyProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };
  return (
    <section className="profile">
      <h2 className="profile__title">Complete Your Profile</h2>
      <div className="profile__container">
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
    </section>
  );
}

export default MyProfile;
