import "./ContextCard.scss";

function ContextCard({ title, content, image, alt, styleClass }) {
  return (
    <article className={`context__card ${styleClass}`}>
      <h2 className="title" dangerouslySetInnerHTML={{ __html: title }}></h2>
      <p className="content">{content}</p>
      <img src={image} alt={alt} className="context__card-img" />
    </article>
  );
}

export default ContextCard;
