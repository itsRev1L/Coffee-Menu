import { useState, useEffect } from "react";
import FilterMenu from "../Componnents/MenuPage/FilterMenu/FilterMenu.jsx";
import MenuList from "../Componnents/MenuPage/MenuList/MenuList.jsx";

function MenuPage({ addToCart, cartItems, removeFromCart }) {
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

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const sortedMenuItems = [...menuItems].sort((a, b) =>
    a.category.localeCompare(b.category)
  );

  useEffect(() => {
    if (selectedCategory) {
      const el = document.getElementById(`category-${selectedCategory}`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedCategory]);

  return (
    <>
      <FilterMenu
        foodData={foodData}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <MenuList
        items={sortedMenuItems}
        searchText={searchText}
        addToCart={addToCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </>
  );
}

export default MenuPage;
