import { React, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { UserRound, Menu, Shapes, ShoppingCart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activepath = location.pathname;
  return (
    <Container fluid className="footer-css text-center">
      <Row
        className="pt-2 d-flex justify-content-evenly align-items-center"
        xs={12}
      >
        <Col
          xs={3}
          className={activepath === "/CartPage" ? "footer-active" : ""}
          onClick={() => {
            navigate("/CartPage");
          }}
        >
          <ShoppingCart
            size={30}
            color={activepath === "/CartPage" ? "#ff5733" : "white"}
          />
          <p>سبد خرید</p>
        </Col>
        <Col
          xs={3}
          className={activepath === "/QuestionPage" ? "footer-active" : ""}
          onClick={() => {
            navigate("/QuestionPage");
          }}
        >
          <Shapes
            size={30}
            color={activepath === "/QuestionPage" ? "#ff5733" : "white"}
          />
          <p>کوییز</p>
        </Col>
        <Col
          xs={3}
          className={activepath === "/MenuPage" ? "footer-active" : ""}
          onClick={() => {
            navigate("/");
          }}
        >
          <Menu size={30} color={activepath === "/" ? "#ff5733" : "white"} />
          <p>منو</p>
        </Col>
        <Col
          xs={3}
          className={activepath === "/LoginPage" ? "footer-active" : ""}
          onClick={() => {
            navigate("/LoginPage");
          }}
        >
          <UserRound
            size={30}
            color={activepath === "/LoginPage" ? "#ff5733" : "white"}
          />
          <p>اکانت</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
