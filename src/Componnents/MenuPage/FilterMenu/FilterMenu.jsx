/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import "./FilterMenu.css";
import { Container, Row, Col } from "react-bootstrap";
import FilterMenuGenerator from "../../FilterMenuGenerator/FilterMenuGenerator";
import FilterMenuSearch from "../../FilterMenuSearch/FilterMenuSearch";

const FilterMenu = ({ foodData, setSelectedCategory, selectedCategory }) => {
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const offsetTop = menuRef.current.offsetTop;
        setIsSticky(window.scrollY > offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      ref={menuRef}
      className={isSticky ? "sticky-menu" : ""}
      style={{ paddingBottom: "20px" }}
    >
      <Row className="food-option-wrapper">
        <Col className="food-filter-container">
          <FilterMenuGenerator
            foodData={foodData}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <FilterMenuSearch />
        </Col>
      </Row>
    </Container>
  );
};

export default FilterMenu;
