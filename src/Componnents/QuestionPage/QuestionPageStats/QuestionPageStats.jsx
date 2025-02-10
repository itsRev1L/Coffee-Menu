import React from "react";
import { Container } from "react-bootstrap";
import "./QuestionPageStats.css";

const QuestionPageStats = () => {
  return (
    <Container className="question-stats m-3 rtl" xs={12} sm={12}>
      <div className="nav-items">
        <div className="nav-stats">
          <span>امتیاز کل: •</span>
        </div>
        <div className="nav-stats">
          <span>سوال ۱</span>
        </div>
        <div className="nav-stats">
          <span>فهرست سوالات</span>
        </div>
      </div>
    </Container>
  );
};
export default QuestionPageStats;
