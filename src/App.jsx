import "./App.scss";
import HomePageContent from "./pages/HomePageContent/HomePageContent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import FormPage from "./pages/FormPage/FormPage";
import UserHomePage from "./pages/UserHomePage/UserHomePage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          <Route path="/" element={<HomePageContent />} />
          <Route path="/demo" element={<FormPage />} />
          {/* <Route path="/home/signin" element={<SigninPage />} />
          <Route path="/home/login" element={<LoginPage />} />  */}
          <Route path="/categories" element={<UserHomePage />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
