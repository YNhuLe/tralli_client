import "./Hero.scss";
import worker from "../../assets/images/worker.svg";
import vector from "../../assets/images/vector.svg";
import Button from "../Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";

function Hero() {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const apiURL = import.meta.env.VITE_API_URL;
  const categoriesListURL = `${apiURL}/`;

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(categoriesListURL);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching services: ", error);
      }
    };
    fetchService();
  }, []);

  useEffect(() => {
    if (categories.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((preIndex) => (preIndex + 1) % categories.length);
    }, 300);
    return () => clearInterval(interval);
  }, [categories]);
  return (
    <>
      <section className="hero">
        <div className="hero_text">
          <h1 className="intro">
            Find a trusted, local{" "}
            <span className="trade__service">
              {categories.length > 0
                ? categories[currentIndex].category_name
                : "Service"}
            </span>{" "}
            in your multi-family community in minutes
          </h1>

          <p className="details">
            We make the search for external maintenance pros easier for you and
            your homeowners
          </p>
        </div>
        <img src={worker} className="worker" alt="trade-worker" />
      </section>
      <div className="button__active">
        <Button url="/demo" />
        <img src={vector} alt="vector" className="vector" />
      </div>
    </>
  );
}

export default Hero;
