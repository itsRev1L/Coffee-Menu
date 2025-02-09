import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./QuestionPageHeader.css";

const QuestionPageHeader = () => {
  return (
    <Container className="p-4 qa-bg-custom">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs="8" className="text-center">
          <h1 className="txt m-0">Question</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionPageHeader;
