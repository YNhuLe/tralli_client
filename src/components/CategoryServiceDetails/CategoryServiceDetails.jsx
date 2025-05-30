import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./CategoryServiceDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import Button from "../common/Button/Button";
function CategoryServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const residentialCom = params.get("residentialCom");

  const [categoryDetails, setCategoryDetails] = useState([]);
  const baseUrl = import.meta.env.VITE_API_URL;
  const categoryServiceDetailsUrl = `${baseUrl}/categories/${id}/services`;
  console.log("services ========:", categoryServiceDetailsUrl);
  useEffect(() => {
    const fetchCategoriesDetails = async () => {
      try {
        const response = await axios.get(categoryServiceDetailsUrl);
        setCategoryDetails(response.data);
        console.log("Serivces: ", response.data);
      } catch (error) {
        console.error(`Error fetching categories details: `, error);
      }
    };
    fetchCategoriesDetails();
  }, [id]);

  const handleSubmitService = (e) => {
    e.preventDefault();
    console.log("Send");
    navigate(
      `/categories/${id}/provider?residentialCom=${encodeURIComponent(
        residentialCom || ""
      )}`
    );
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
        <input
          title="Not captured above? We want to make sure we find you the right person. Add more details here."
          type="text"
          className="service__input"
          placeholder="Not captured above? We want to make sure we find you the right person. Add more details here."
        />
        <Button btnType="submit" onClick={handleSubmitService} />
      </form>
    </>
  );
}

export default CategoryServiceDetails;
