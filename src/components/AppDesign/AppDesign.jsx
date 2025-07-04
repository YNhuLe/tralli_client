import "./AppDesign.scss";
import mobile from "../../assets/images/phone-screen.png";

import Button from "../common/Button/Button";
import KebabMenu from "../KebabMenu/KebabMenu";
function AppDesign() {
  return (
    <section className="design">
      <h2 className="design__title">
        Designed to simplify the{" "}
        <span className="highlight">home ownership experience</span>{" "}
      </h2>
      <article className="section__demo">
        <img src={mobile} alt="mobile-screenshot" className="phone-screen" />

        <div className="description">
          <p className="description__trades">
            Find your trades pro based on{" "}
            <span className="highlight">job titles </span>or{" "}
            <span className="highlight">images</span>
          </p>
          <KebabMenu />
          <p className="description__partner">
            Get connected with a Tralli Partner{" "}
            <span className="highlight">
              who knows your multi-family development
            </span>
          </p>
          <KebabMenu />

          <p className="description__track">
            Track, manage and complete{" "}
            <span className="highlight">active and past claims </span>all within
            the Tralli application
          </p>
        </div>
      </article>
      <Button url="/demo" />
    </section>
  );
}

export default AppDesign;
