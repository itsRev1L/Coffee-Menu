import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Code } from "lucide-react";

import "./NotFound.css";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container xs={12} md={12} lg={12} className="notfound-container">
      <Row className="notfound-icon">
        <Col>
          <Code size={80} color="#ef9622" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="notfound-title">404 Page Not Found</h2>
          <p className="notfound-description">
            .ممکن است آدرس را اشتباه وارد کرده باشید
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <button className="notfound-button" onClick={() => navigate("/")}>
            بازگشت به منو
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
