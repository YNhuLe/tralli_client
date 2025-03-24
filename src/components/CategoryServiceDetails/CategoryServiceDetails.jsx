import { useParams } from "react-router-dom";
import "./CategoryServiceDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
function CategoryServiceDetails() {
  const { id } = useParams();
  const [categoryDetails, setCategoryDetails] = useState([]);
  const baseUrl = import.meta.env.VITE_API_URL;
  const categoryServiceDatailsUrl = `${baseUrl}/categories/${id}/services`;
  console.log("Cate: ", categoryDetails);

  useEffect(() => {
    const fetchCategoriesDetails = async () => {
      try {
        const response = await axios.get(categoryServiceDatailsUrl);
        setCategoryDetails(response.data);
        console.log("Categories: ", response.data);
      } catch (error) {
        console.error(`Error fetching categories details: `, error);
      }
    };
    fetchCategoriesDetails();
  }, [id]);

  const handleSubmitService = () => {
    console.log("Send");
  };

  return (
    <>
      <form onSubmit={handleSubmitService} className="service">
        {categoryDetails.length > 0 ? (
          categoryDetails.map((service) => (
            <div className="service__item" key={service.id}>
              <div className="service__list">
                {service.services_name}
                {/* <CategoriesCard /> */}
              </div>
              <input type="checkbox" value={service.id} className="checkbox" />
            </div>
          ))
        ) : (
          <p>Loading services ...</p>
        )}
      </form>
    </>
  );
}

export default CategoryServiceDetails;
