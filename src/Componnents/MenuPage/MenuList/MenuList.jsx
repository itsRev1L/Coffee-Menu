/* eslint-disable react/prop-types */
import "./MenuList.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const MenuList = ({ items }) => {
  return (
    <Container style={{ paddingBottom: "90px" }}>
      <Row className="rtl">
        {items.map((item, index) => (
          <Col key={item.id} md={12} xs={12}>
            {index === 0 || items[index - 1].category !== item.category ? (
              <h2 id={`category-${item.category}`} className="category-header">
                {item.category}
              </h2>
            ) : null}

            <Card className="menu-item">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div className="menu-text">
                  <div className="title">{item.name}</div>
                  <div className="desc">{item.description}</div>
                  <div className="price">{item.price}</div>
                </div>
                <div className="image-box">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="food-image"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuList;
