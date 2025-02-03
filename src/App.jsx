import { useState } from "react";
import Header from "./Componnents/Header/Header.jsx";
import FilterMenu from "./Componnents/FilterMenu/FilterMenu.jsx";
import MenuList from "./Componnents/MenuList/MenuList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const foodData = [
    { id: 1, name: "همه" },
    { id: 2, name: "پیتزا" },
    { id: 3, name: "برگر" },
    { id: 4, name: "پاستا" },
    { id: 5, name: "سوشی" },
    { id: 6, name: "دسر" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "پیتزا",
      description: "پیتزای خوشمزه با مواد تازه",
      price: "۳۲۰,۰۰۰ تومان",
      category: "پیتزا",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
    },
    {
      id: 2,
      name: "برگر",
      description: "برگر ذغالی با سس مخصوص",
      price: "۲۸۰,۰۰۰ تومان",
      category: "برگر",
      image: "/images/burger.jpg",
    },
    {
      id: 3,
      name: "پاستا",
      description: "پاستای ایتالیایی با پنیر پارمزان",
      price: "۲۵۰,۰۰۰ تومان",
      category: "پاستا",
      image: "/images/pasta.jpg",
    },
    {
      id: 4,
      name: "سوشی",
      description: "سوشی دریایی تازه",
      price: "۴۵۰,۰۰۰ تومان",
      category: "سوشی",
      image: "/images/sushi.jpg",
    },
    {
      id: 5,
      name: "پیتزا نیمه مخصوص ",
      description: "پیتزای با سوسیس اضافه،گوشت هم داره",
      price: "۳۵۰,۰۰۰ تومان",
      category: "پیتزا",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0c/Pepperoni_Pizza_%2829204589095%29.jpg",
    },
    {
      id: 6,
      name: "دونر پیتزا ",
      description: "پیتزای با دونر اضافه،گوشت هم داره",
      price: "5۵۰,۰۰۰ تومان",
      category: "پیتزا",
      image: "",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("همه");

  const filteredItems =
    selectedCategory === "همه"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Header />
      <FilterMenu
        foodData={foodData}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <MenuList items={filteredItems} />
    </>
  );
}

export default App;
