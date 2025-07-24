import MyProfile from "../../profile/MyProfile/MyProfile";
import Header from "../../components/common/Header/Header";
import AltitudePic from "../../components/AltitudePic/AltitudePic";
import "./SetUpProfilePage.scss";
import Button from "../../components/common/Button/Button";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";
export default function SetUpProfilePage() {
  const handleSubmitEditProfile = () => {
    console.log("Submit profile");
  };

  return (
    <>
      <Header formType="signup" />
      <MyProfile />
      <h2 className="signup__profile-com">Current Multi-Family Community</h2>
      <AltitudePic />
      <PaymentInfo />
      <Button btnType="complete_profile" onClick={handleSubmitEditProfile} />
    </>
  );
}
