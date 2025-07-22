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
import TradeRequirementsPage from "./pages/TradeRequirementsPage/TradeRequirementsPage";
import DemoForm from "./components/DemoForm/DemoForm";
import SignupPage from "./pages/SignupPage/SignupPage";
import BusinessDetails from "./pages/BusinessDetails/BusinessDetails";
import CompleteProfilePage from "./pages/CompleteProfilePage/CompleteProfilePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import { UserProvider } from "./context/UserProvider";
import SetUpProfilePage from "./pages/SetUpProfilePage/SetUpProfilePage";
function App() {
  return (
    <div>
      <Router>
        <UserProvider>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            <Route path="/" element={<HomePageContent />} />
            <Route path="/demo" element={<FormPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signup/profile" element={<SetUpProfilePage />} />
            <Route path="/login" element={<SignInPage />} />
            {/* <Route path="/home/login" element={<LoginPage />} />  */}
            <Route path="/categories" element={<UserHomePage />} />
            <Route
              path="/signup/complete-profile"
              element={<CompleteProfilePage />}
            />
            <Route
              path="/categories/:id/services"
              element={<TradeRequirementsPage />}
            />
            <Route
              path="/categories/:id/provider"
              element={<BusinessDetails />}
            />

            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
