import AppDesign from "../../components/AppDesign/AppDesign";
import ArticleList from "../../components/ArticleList/ArticleList";
import ContextComponent from "../../components/ContextComponent/ContextComponent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./HomePageContent.scss";

function HomePageContent() {
  return (
    <>
      <Header />
      <ContextComponent />
      <ArticleList />
      <AppDesign />
      <Footer />
    </>
  );
}

export default HomePageContent;
