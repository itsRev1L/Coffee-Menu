import "./FilterMenu.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const foodData = [
  { id: 1, name: "pizza" },
  { id: 2, name: "Burger" },
  { id: 3, name: "Pasta" },
  { id: 4, name: "Sushi" },
  { id: 5, name: "Salad" },
  { id: 6, name: "Tacos" },
  { id: 7, name: "Steak" },
  { id: 8, name: "Ice Cream" },
  { id: 9, name: "Cupcake" },
  { id: 10, name: "Fried Chicken" },
];

const FilterMenu = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="food-option-wrapper">
            <div className="food-filter-container">
              {foodData.map((food) => (
                <div key={food.id} className="food-option">
                  <Button variant="outline-primary">{food.name}</Button>
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
