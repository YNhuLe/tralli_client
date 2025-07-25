import { useEffect, useState } from "react";
import "./MyProfile.scss";
import { useUser } from "../../context/UserProvider";
import errors from "../../assets/icons/error-24px.svg";
function MyProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { user, loading } = useUser();

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

  console.log("User: ", user);
  useEffect(() => {
    if (user) {
      setFullName(user.user_name);
      setEmail(user.email);
      setPhoneNumber(user.phone_number);
    }
  }, [user]);
  if (loading || !user) {
    return <h1>Loading users..</h1>;
  }
  return (
    <>
      <h2 className="profile__title">Complete Your Profile</h2>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__pic">
            <label className="pic__label">
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
            <label className="profile__fields-fname"> Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={handleChangeFullName}
              className={`profile__fields-input ${
                error.fullName ? "invalid" : ""
              }`}
            />
            <div className={error.fullName ? "error__state" : ""}>
              {error.fullName && (
                <>
                  <img src={errors} alt="error-icon" className="error__icon" />
                  <p className="error__message">This field is required</p>
                </>
              )}
            </div>
          </div>

          <div>
            <label className="profile__fields-email"> Email</label>
            <input
              type="text"
              value={email}
              onChange={handleChangeEmail}
              className={`profile__fields-input ${
                error.email ? "invalid" : ""
              }`}
            />
            <div className={error.email ? "error__state" : ""}>
              {error.email && (
                <>
                  <img src={errors} alt="error-icon" className="error__icon" />
                  <p className="error__message">{error.email}</p>
                </>
              )}
            </div>
          </div>

          <div>
            <label className="profile__fields-phone"> Phone</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
              className={`profile__fields-input ${
                error.phoneNumber ? "invalid" : ""
              }`}
            />

            <div className={error.phoneNumber ? "error__state" : ""}>
              {error.phoneNumber && (
                <>
                  <img src={errors} alt="error-icon" className="error__icon" />
                  <p className="error__message">
                    {error.phoneNumber ||
                      "This field is required in format: +0 (000) 000-0000"}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyProfile;
