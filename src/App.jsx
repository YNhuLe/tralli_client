import "./App.scss";
import HomePageContent from "./components/HomePageContent/HomePageContent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePageContent />} />
          {/* <Route path="/home/demo" element={<DemoPage />} />
          <Route path="/home/signin" element={<SigninPage />} />
          <Route path="/home/login" element={<LoginPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
