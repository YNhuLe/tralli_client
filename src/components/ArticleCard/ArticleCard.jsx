import "./ArticleCard.scss";

function ArticleCard({ title, content, styleClass }) {
  return (
    <article className={`article__card ${styleClass}`}>
      <h2 className="title">{title}</h2>
      <p className="content">{content}</p>
    </article>
  );
}

export default ArticleCard;
