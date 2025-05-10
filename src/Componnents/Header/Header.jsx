import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./Header.css";
const Header = () => {
  const Navigate = useNavigate();
  const Location = useLocation();

  const ActivePath = Location.pathname;

  const pageTitles = {
    "/": "منو",
    "/MenuPage": "منو",
    "/Quiz": "کوییز",
    "/Cart": "سبد خرید",
    "/Login": "اکانت",
    "/Signup": "ثبت نام",
  };
  const pageTitle = pageTitles[ActivePath] || "صفحه پیدا نشد";

  return (
    <>
      <Container fluid className="pb-3 bg-custom text-center">
        <Row>
          <Col xs="12" sm="12" className="pt-2 mt-5 mb-3">
            <h1 className="txt">{pageTitle}</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
