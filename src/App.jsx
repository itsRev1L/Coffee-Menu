import { useState, useEffect } from "react";
import Header from "./Componnents/Header/Header.jsx";
import FilterMenu from "./Componnents/FilterMenu/FilterMenu.jsx";
import MenuList from "./Componnents/MenuList/MenuList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const foodData = [
    { id: 1, name: "پیتزا" },
    { id: 2, name: "برگر" },
    { id: 3, name: "پاستا" },
    { id: 4, name: "سوشی" },
    { id: 5, name: "دسر" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "پیتزا",
      description: "پیتزای خوشمزه",
      price: "۳۲۰,۰۰۰ تومان",
      category: "پیتزا",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg",
    },
    {
      id: 2,
      name: "برگر",
      description: "برگر ذغالی",
      price: "۲۸۰,۰۰۰ تومان",
      category: "برگر",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg",
    },
    {
      id: 3,
      name: "پاستا",
      description: "پاستای ایتالیایی",
      price: "۲۵۰,۰۰۰ تومان",
      category: "پاستا",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fe/A_better_homemade_pasta.jpg",
    },
    {
      id: 4,
      name: "سوشی",
      description: "سوشی دریایی تازه",
      price: "۴۵۰,۰۰۰ تومان",
      category: "سوشی",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/800px-Sushi_platter.jpg",
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
      name: "پیتزا مارگاریتا",
      description: "پیتزای ایتالیایی با پنیر موزارلا و ریحان تازه",
      price: "۳۲۰,۰۰۰ تومان",
      category: "پیتزا",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    },
    {
      id: 7,
      name: "برگر کلاسیک",
      description: "برگر گوشت گریل شده با پنیر چدار و سس مخصوص",
      price: "۲۸۰,۰۰۰ تومان",
      category: "برگر",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg",
    },
    {
      id: 8,
      name: "سوشی رول سالمون",
      description: "سوشی رول با ماهی سالمون، برنج و جلبک دریایی",
      price: "۴۵۰,۰۰۰ تومان",
      category: "سوشی",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/800px-Sushi_platter.jpg",
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
