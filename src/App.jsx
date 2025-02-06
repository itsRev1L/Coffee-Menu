import { useState, useEffect } from "react";
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
    { id: 7, name: "kids" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "پیتزا",
      description: "پیتزای خوشمزه",
      price: "۳۲۰,۰۰۰ تومان",
      category: "پیتزا",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
    },
    {
      id: 2,
      name: "برگر",
      description: "برگر ذغالی",
      price: "۲۸۰,۰۰۰ تومان",
      category: "برگر",
      image: "/images/burger.jpg",
    },
    {
      id: 3,
      name: "پاستا",
      description: "پاستای ایتالیایی",
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
      name: "پیتزا نیمه مخصوص",
      description: "پیتزا با سوسیس",
      price: "۳۵۰,۰۰۰ تومان",
      category: "پیتزا",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0c/Pepperoni_Pizza_%2829204589095%29.jpg",
    },
    {
      id: 6,
      name: "Nader",
      description:
        "20 Sale, az bandar, Koliye hash kar mikone, Ciggar ham nemikeshe",
      price: "60$",
      category: "kids",
      image: "",
    },
    {
      id: 7,
      name: "soroosh",
      description:
        "20 sale, faghat mano nakeshide, shayad ghalb esh khoob bashe, shiraz ",
      price: "5$",
      category: "kids",
      image: "",
    },
    {
      id: 8,
      name: "Esi",
      description: "22 No life, no job",
      price: "10$",
      category: "kids",
      image: "",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("همه");

  const sortedMenuItems = [...menuItems].sort((a, b) =>
    a.category.localeCompare(b.category)
  );

  const scrollToCategory = (category) => {
    if (category === "همه") return;

    const categoryElement = document.getElementById(`category-${category}`);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    scrollToCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Header />
      <FilterMenu
        foodData={foodData}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <MenuList items={sortedMenuItems} />
    </>
  );
}

export default App;
