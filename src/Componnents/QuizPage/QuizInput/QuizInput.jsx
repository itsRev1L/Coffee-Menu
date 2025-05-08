import React from "react";
import "./QuizInput.css";
import { Container, Col, Row } from "react-bootstrap";

const QuestionPageInput = () => {
  return (
    <Container className="mt-2 rtl">
      <Row>
        <Col xs={12}>
          <form className="answer-form">
            <div className="answer-card">
              <input
                type="text"
                className="answer-input"
                placeholder="جواب خود را وارد کنید"
              />
            </div>
            <button type="submit" className="submit-button">
              <span>ارسال</span>
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionPageInput;
