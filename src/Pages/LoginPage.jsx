import React from "react";
import LoginForm from "../Componnents/LoginPage/LoginForm";
import { Container, Row, Col } from "reactstrap";

const LoginPage = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center  text-center ">
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
