import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./QuestionPagePuzzle.css";

const QuestionPagePuzzle = () => {
  return (
    <Container className="mt-3 rtl">
      <Row className="justify-content-center">
        <Col xs={12} sm={12} className="mb-2">
          <div className="question-card">
            <span></span>
          </div>
        </Col>

        <Col xs={12} sm={12} className="mb-2">
          <div className="image-card">
            <span></span>
          </div>
        </Col>

        <Col xs={12} sm={12}>
          <div className="guide-card">
            <span></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionPagePuzzle;
