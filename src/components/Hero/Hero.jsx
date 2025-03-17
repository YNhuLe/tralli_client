import "./Hero.scss";
import worker from "../../assets/images/worker.svg";
import vector from "../../assets/images/vector.svg";
import Button from "../Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";

function Hero() {
  const [service, setService] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const apiURL = import.meta.env.VITE_API_URL;
  const serviceListURL = `${apiURL}/`;

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(serviceListURL);
        setService(response.data);
      } catch (error) {
        console.error("Error fetching services: ", error);
      }
    };
    fetchService();
  }, []);

  useEffect(() => {
    if (service.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((preIndex) => (preIndex + 1) % service.length);
    }, 300);
    return () => clearInterval(interval);
  }, [service]);
  return (
    <>
      <section className="hero">
        <div className="hero_text">
          <h1 className="intro">
            Find a trusted, local{" "}
            <span className="trade__service">
              {service.length > 0
                ? service[currentIndex].services_name
                : "Service"}
            </span>{" "}
            in your multi-family community in minutes
          </h1>

          <p className="details">
            We make the search for external maintenance pros easier for you and
            your homeowners
          </p>

          <Button />
        </div>
        <img src={worker} className="worker" alt="trade-worker" />
      </section>
      <img src={vector} alt="vector" className="vector" />
    </>
  );
}

export default Hero;
