/* eslint-disable react/prop-types */

import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./QuizPuzzle.css";

const QuestionPagePuzzle = ({ question, image, hint, score }) => {
  return (
    <Container className="mt-2 rtl">
      <Row className="justify-content-center">
        <Col xs={12} sm={12} className="mb-2">
          <div className="question-card">
            <span>
              {question} ({score} امتیاز)
            </span>
          </div>
        </Col>

        <Col xs={12} sm={12} className="mb-2">
          <div className="image-card">
            <img src={image} alt="سوال" className="question-image" />
          </div>
        </Col>

        <Col xs={12} sm={12}>
          <div className="guide-card">
            <span>{hint}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionPagePuzzle;
