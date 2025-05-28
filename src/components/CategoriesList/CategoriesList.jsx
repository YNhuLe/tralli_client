import { useEffect, useState } from "react";
import "./CategoriesList.scss";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import CategoriesCard from "../CategoriesCard/CategoriesCard";

function CategoriesList() {
  const [category, setCategory] = useState([]);

  const baseUrl = import.meta.env.VITE_API_URL;
  const categoriesUrl = `${baseUrl}/categories`;
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(categoriesUrl);
        setCategory(response.data);
      } catch (error) {
        console.error(`Error fetching categories: `, error);
      }
    };
    fetchCategories();
  }, [categoriesUrl]);

  return (
    <section className="category__list">
      {category.map((cat, index) => (
        <div className="category__item" key={index}>
          <Link
            to={`/categories/${cat.id}/services${location.search}`}
            state={{ category: cat }}>
            <CategoriesCard category={cat} />
          </Link>
        </div>
      ))}
    </section>
  );
}

export default CategoriesList;
