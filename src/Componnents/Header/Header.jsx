import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header = () => {
  return (
    <>
      <Container className="pb-5 bg-custom text-center">
        <Row className="pt-3">
          <Col xs="12" sm="12" className="d-flex justify-content-around">
            <AccountCircleOutlinedIcon /> <SearchOutlinedIcon />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" className="pt-4 mt-5 mb-3">
            <h1 className="txt">MENU</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
