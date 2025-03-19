import { useEffect, useState } from "react";
import "./CategoriesList.scss";
import axios from "axios";
import CategoriesCard from "../CategoriesCard/CategoriesCard";

function CategoriesList() {
  const [category, setCategory] = useState([]);

  const baseUrl = import.meta.env.VITE_API_URL;
  const categoriesUrl = `${baseUrl}/categories`;

  console.log("URL: ", categoriesUrl);

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
          <CategoriesCard category={cat} />
        </div>
      ))}
    </section>
  );
}

export default CategoriesList;
