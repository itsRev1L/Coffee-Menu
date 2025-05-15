/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import "./FilterMenu.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Search } from "lucide-react";

const FilterMenu = ({
  foodData,
  setSelectedCategory,
  selectedCategory,
  setSearchText,
  searchText,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
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

  const handleSearchClick = () => {
    setShowSearchBar((prev) => !prev);
  };

  return (
    <Container
      fluid
      ref={menuRef}
      className={isSticky ? "sticky-menu" : ""}
      style={{ paddingBottom: "10px" }}
    >
      <Row className="d-flex align-items-center">
        <Col>
          <div className="food-option-wrapper">
            <div onClick={handleSearchClick} style={{ cursor: "pointer" }}>
              <Search color="White" size={30} strokeWidth={2} />
            </div>

            {showSearchBar ? (
              <div>
                <Form.Control
                  type="text"
                  placeholder="جستجوی غذا..."
                  className={`search-input ${showSearchBar ? "show" : ""}`}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            ) : (
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
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterMenu;
