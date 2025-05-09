import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Componnents/Header/Header.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import MenuPage from "./Pages/MenuPage";
import QuestionPage from "./Pages/QuizPage.jsx";
import Footer from "./Componnents/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/Quiz" element={<QuestionPage />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
