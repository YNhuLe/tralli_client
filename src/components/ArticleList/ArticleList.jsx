import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticleList.scss";

function ArticleList() {
  const articles = [
    {
      title: "Improve Vendor Satisfaction",
      content:
        "Reduce the friction when making contracts. Your trades pro will paid the day they finish the job.",
      styleClass: "white-theme",
    },
    {
      title: "Happier Homeowner Experiences",
      content:
        "Enable your customers with vetted trades in an easy user experience, without long quotes and constant searching.",
      styleClass: "lightgreen-theme",
    },
    {
      title: "Increase Operational Efficiencies",
      content:
        "Manage your vendors while streamlining communications for your homeowners in 1 app.",
      styleClass: "darkgreen-theme",
    },
  ];
  return (
    <section className="message">
      <h1 className="message__text">
        How we’re helping <span className="text">you</span> and{" "}
        <span className="text">your homeowners</span>
      </h1>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          content={article.content}
          styleClass={article.styleClass}
        />
      ))}
    </section>
  );
}

export default ArticleList;
