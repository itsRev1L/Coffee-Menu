import React from "react";
import "../LoginPage/LoginForm.css";
import { Container, Row, Col } from "reactstrap";

const SignupForm = () => {
  return (
    <Container className="login-container rtl">
      <Row className="justify-content-center">
        <Col md={12} lg={5} xs={12}>
          <form className="login-form-box p-4 shadow rounded">
            <h2 className="login-title text-center my-4">
              اطلاعات زیر را وارد کنید
            </h2>
            <Row className="mb-3">
              <Col>
                <input
                  type="txt"
                  placeholder="نام"
                  className="login-input form-control"
                  required
                />
              </Col>
              <Col>
                <input
                  type="txt"
                  placeholder="نام خانوادگی"
                  className="login-input form-control"
                  required
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <input
                  type="tel"
                  placeholder="شماره تلفن"
                  className="login-input form-control"
                  required
                  dir="rtl"
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <input
                  type="email"
                  placeholder="ایمیل"
                  className="login-input form-control"
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <input
                  type="password"
                  placeholder="رمز عبور"
                  className="login-input form-control"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Col>
                  <input
                    type="password"
                    placeholder="تکرار رمز عبور"
                    className="login-input form-control"
                    required
                  />
                </Col>
              </Col>
            </Row>
            <Col>
              <button type="submit" className="login-button btn w-100 mt-3">
                ورود
              </button>
            </Col>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;
