import React from "react";
import SignupForm from "../Componnents/SignupPage/SignupForm";
import { Container, Row, Col } from "reactstrap";

function SignupPage() {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center  text-center ">
        <Col>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;
