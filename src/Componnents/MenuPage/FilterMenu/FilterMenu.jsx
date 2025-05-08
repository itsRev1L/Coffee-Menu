/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import "./FilterMenu.css";
import { Container, Row, Col, Button } from "react-bootstrap";

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
      <Row>
        <Col>
          <div className="food-option-wrapper">
            <div className="food-filter-container">
              {foodData.map((food) => (
                <div key={food.id} className="food-option">
                  <Button
                    variant={
                      selectedCategory === food.name
                        ? "warning"
                        : "outline-warning"
                    }
                    onClick={() => setSelectedCategory(food.name)}
                  >
                    {food.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterMenu;
