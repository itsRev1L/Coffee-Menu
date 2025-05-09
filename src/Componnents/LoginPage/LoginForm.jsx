import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const LoginPage = () => {
  return (
    <Container className="login-container rtl">
      <Row className="justify-content-center">
        <Col md={12} lg={5} xs={12}>
          <h2 className="login-title text-center my-4">ورود به حساب کاربری</h2>
          <form className="login-form-box p-4 shadow rounded">
            <div className="mb-3">
              <input
                type="email"
                placeholder="ایمیل"
                className="login-input form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="رمز عبور"
                className="login-input form-control"
                required
              />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <Link to="/ForgotPassword" className="login-link">
                رمز عبور را فراموش کرده‌اید؟
              </Link>
            </div>
            <button type="submit" className="login-button btn w-100 mt-3">
              ورود
            </button>
            <div className="text-center mt-3 mt-5">
              <span>حساب کاربری ندارید؟ </span>
              <Link to="/Signup" className="login-link">
                ثبت‌نام کنید
              </Link>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
