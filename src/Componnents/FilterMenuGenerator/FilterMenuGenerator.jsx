import React from "react";
import "./FilterMenuGenerator.css";
import { Button, Col, Row } from "react-bootstrap";

const FilterMenuGenerator = ({
  foodData,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <>
      <Row>
        {foodData.map((food) => (
          <Col key={food.id} className="food-option">
            <Button
              variant={selectedCategory === food.name ? "" : ""}
              onClick={() => setSelectedCategory(food.name)}
            >
              {food.name}
            </Button>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FilterMenuGenerator;
