import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MenuPage from "./Pages/MenuPage";
import QuestionPage from "./Pages/QuestionPage";
let active = false;
function App() {
  return <>{active ? <MenuPage /> : <QuestionPage />}</>;
}

export default App;
