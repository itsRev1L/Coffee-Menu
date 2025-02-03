/* eslint-disable react/prop-types */

import "./FilterMenu.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const FilterMenu = ({ foodData, setSelectedCategory, selectedCategory }) => {
  return (
    <Container>
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
