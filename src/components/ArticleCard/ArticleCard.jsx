import "./ArticleCard.scss";

function ArticleCard({ title, content, styleClass }) {
  return (
    <article className={`article__card ${styleClass}`}>
      <h2 className="article__card-title">{title}</h2>
      <p className="article__card-content">{content}</p>
    </article>
  );
}

export default ArticleCard;
