import "./TradeRequirementsPage.scss";
import AltitudePic from "../../components/AltitudePic/AltitudePic";
import CategoryServiceDetails from "../../components/CategoryServiceDetails/CategoryServiceDetails";
import Header from "../../components/common/Header/Header";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import { useLocation, useParams } from "react-router-dom";
function TradeRequirementsPage() {
  const { id } = useParams();
  console.log("ID:", id);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userName = params.get("fullName");
  const category = location.state?.category;
  const categoryName = category.category_name;

  const residentialCom = params.get("residentialCom");
  return (
    <div>
      <Header formType="signup" />
      <AltitudePic alType="trades" residentialCom={residentialCom} />
      <div className="cate">
        <p className="cate__text">
          Searching for your <span className="cate__title">{categoryName}</span>
        </p>
      </div>
      <h2 className="service__details">Let's be more specific</h2>
      <CategoryServiceDetails />
    </div>
  );
}

export default TradeRequirementsPage;
