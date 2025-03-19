import "./CategoriesCard.scss";

function CategoriesCard({ category }) {
  const { category_name } = category;

  if (!category) return <h1> Rendering the categories!</h1>;
  return (
    <div className="category">
      <p className="category__name">{category_name}</p>
    </div>
  );
}

export default CategoriesCard;
