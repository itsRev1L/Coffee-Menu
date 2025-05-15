import React from "react";
import { Row, Col, Card } from "react-bootstrap";
const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <Row className="rtl">
      {cartItems.map((item) => (
        <Col key={item.id} md={12} xs={12} className="mb-3">
          <Card className="menu-item">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div className="menu-text" style={{ flex: 1 }}>
                <div className="title">{item.name}</div>
                <div className="desc">{item.description}</div>
                <div className="price" style={{ marginBottom: "8px" }}>
                  {item.price}
                </div>
                <button
                  className="btn btn-sm menu-button-remove"
                  onClick={() => removeFromCart(item.id)}
                  style={{ width: "100px" }}
                >
                  حذف
                </button>
              </div>
              <div className="image-box" style={{ marginLeft: "15px" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="food-image"
                  style={{ maxWidth: "120px", borderRadius: "10px" }}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cart;
