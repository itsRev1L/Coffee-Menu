import { react, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Componnents/Header/Header.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import MenuPage from "./Pages/MenuPage";
import QuestionPage from "./Pages/QuizPage.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Footer from "./Componnents/Footer/Footer.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MenuPage
                addToCart={addToCart}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/Quiz" element={<QuestionPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route
            path="/Cart"
            element={
              <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
