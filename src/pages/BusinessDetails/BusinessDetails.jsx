import { useState, useEffect } from "react";
import { Star, MapPin } from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import "./BusinessDetails.scss";
import { useParams, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import AltitudePic from "../../components/AltitudePic/AltitudePic";
import business_img from "../../assets/images/business.png";
import Button from "../../components/Button/Button";
function BusinessDetails() {
  const [business, setBusiness] = useState([]);
  const baseUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const residentialCom = params.get("residentialCom");

  console.log("CommunityL ", residentialCom);
  const businessUrl = `${baseUrl}/categories/${id}/provider`;
  const { provider_name, start_time, end_time, day_of_week } = business;

  console.log("NAME: ", provider_name);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const response = await axios.get(businessUrl);
        setBusiness(response.data);
      } catch (error) {
        console.error(`Error fetching providers: `, error);
      }
    };
    fetchProvider();
  }, [businessUrl]);
  console.log("BUSINESS: ", business);

  const handleSubmitConfirmationJob = (e) => {
    e.preventDefault();
    console.log("Send");
  };
  return (
    <>
      <Header formType="demo" />
      <AltitudePic alType="trades" residentialCom={residentialCom} />
      <p className="business">Your Recommended Tralli Partner</p>
      <img src={business_img} className="business_img" alt="business" />
      <p className="business__name">{provider_name}</p>
      <div className="provider">
        <Star size={24} color="black" />
        <p className="provider__star">4.5 (500 reviews)</p>
        <MapPin size={24} color="black" />{" "}
        <p className="provider__location">0.2 miles</p>
      </div>
      <p className="provider__cost">
        Your job would cost{" "}
        <span className="provider__cost-amount">$50 per hour</span>
      </p>{" "}
      <p className="calendar">Calender</p>
      <form onSubmit={handleSubmitConfirmationJob}>
        <Calendar />
        <Button btnType="submit-job" onClick={handleSubmitConfirmationJob} />
      </form>
    </>
  );
}

export default BusinessDetails;
