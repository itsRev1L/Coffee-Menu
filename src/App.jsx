import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./Pages/MenuPage";
import QuestionPage from "./Pages/QuestionPage";
import Footer from "./Componnents/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/QuestionPage" element={<QuestionPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
