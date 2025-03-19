import ContextCard from "../ContextCard/ContextCard";
import "./ContextComponent.scss";

import photo1 from "../../assets/images/photo-1.png";
import photo2 from "../../assets/images/photo-2.png";
import photo3 from "../../assets/images/photo-3.png";
import vector2 from "../../assets/images/vector2.svg";

function ContextComponent() {
  const contexts = [
    {
      title:
        'Simplify the external search process for  <span class="highlight">when it matters most</span>',

      content:
        "Your homeowners can easily search vetted tradespeople who are familiar with your multi-family development",
      image: photo1,
      alt: "piping-issue",
    },
    {
      title:
        '<span class="highlight">Easily onboard and manage your vendors</span> as Tralli partners for your homeowners',

      content:
        "Scrap the phone numbers and emails. With Tralli, your vendors can communicate with you directly while also servicing your community in one platform",

      image: photo2,
      alt: "issue-discussion",
    },
    {
      title:
        'Built for your community,  <span class="highlight">by the community</span>',

      content:
        "We want to make owning a home easier, especially with last minute fixes. We’re building the future of working together.",
      image: photo3,
      alt: "community",
    },
  ];
  return (
    <section className="context">
      {contexts.map((context, index) => (
        <ContextCard
          key={index}
          title={context.title}
          content={context.content}
          image={context.image}
          alt={context.alt}
        />
      ))}
      <img src={vector2} className="vector-2" alt="vector" />
    </section>
  );
}

export default ContextComponent;
