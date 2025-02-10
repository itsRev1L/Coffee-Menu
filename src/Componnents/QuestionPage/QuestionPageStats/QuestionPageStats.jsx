import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./QuestionPageStats.css";

const QuestionPageStats = () => {
  return (
    <Container className="d-flex justify-content-center my-3">
      <Row className="question-stats text-center">
        <Col xs="4">
          <div className="nav-stats">
            <span> امتیاز کل: 0</span>
          </div>
        </Col>
        <Col xs="4">
          <div className="nav-stats">
            <span>سوال ۱</span>
          </div>
        </Col>
        <Col xs="4">
          <div className="nav-stats">
            <span>فهرست سوالات</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionPageStats;
