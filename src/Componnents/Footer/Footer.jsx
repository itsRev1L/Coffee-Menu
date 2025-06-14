import { React } from "react";
import { Container, Row, Col } from "reactstrap";
import { UserRound, Menu, Shapes, ShoppingCart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activepath = location.pathname;
  return (
    <Container fluid className="footer-css text-center ">
      <Row
        className="pt-2 d-flex justify-content-evenly align-items-center"
        xs={12}
      >
        <Col
          xs={3}
          className={activepath === "/Cart" ? "footer-active" : ""}
          onClick={() => {
            navigate("/Cart");
          }}
        >
          <ShoppingCart
            size={30}
            color={activepath === "/Cart" ? "#ff5733" : "white"}
          />
          <p>سبد خرید</p>
        </Col>
        <Col
          xs={3}
          className={activepath === "/Quiz" ? "footer-active" : ""}
          onClick={() => {
            navigate("/Quiz");
          }}
        >
          <Shapes
            size={30}
            color={activepath === "/Quiz" ? "#ff5733" : "white"}
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
          className={activepath === "/Login" ? "footer-active" : ""}
          onClick={() => {
            navigate("/Login");
          }}
        >
          <UserRound
            size={30}
            color={activepath === "/Login" ? "#ff5733" : "white"}
          />
          <p>اکانت</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
