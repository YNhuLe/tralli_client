import AppDesign from "../../components/AppDesign/AppDesign";
import ArticleList from "../../components/ArticleList/ArticleList";
import ContextComponent from "../../components/ContextComponent/ContextComponent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/common/Header/Header";
import "./HomePageContent.scss";
import Login from "../../components/Auth/Login/Login";

function HomePageContent() {
  return (
    <>
      <Header formType="landing" />
      <ContextComponent />
      <ArticleList />
      <AppDesign />
      <Footer />
    </>
  );
}

export default HomePageContent;
