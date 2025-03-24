import "./TradeRequirementsPage.scss";
import AltitudePic from "../../components/AltitudePic/AltitudePic";
import CategoryServiceDetails from "../../components/CategoryServiceDetails/CategoryServiceDetails";
import Header from "../../components/Header/Header";
function TradeRequirementsPage() {
  return (
    <div>
      <Header formType="signup" />
      <AltitudePic alType="trades" />
      <h2 className="service__details">Let's be more specific</h2>
      <CategoryServiceDetails />
    </div>
  );
}

export default TradeRequirementsPage;
