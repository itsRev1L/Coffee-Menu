import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./Pages/MenuPage";
import QuestionPage from "./Pages/QuestionPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/QuestionPage" element={<QuestionPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
