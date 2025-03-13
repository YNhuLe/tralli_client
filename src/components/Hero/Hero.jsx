import "./Hero.scss";
import worker from "../../assets/images/worker.svg";
import vector from "../../assets/images/vector.svg";
import Button from "../Button/Button";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero_text">
          <h1 className="intro">
            Find a trusted, local [tradespeople] in your multi-family community
            in minutes
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
