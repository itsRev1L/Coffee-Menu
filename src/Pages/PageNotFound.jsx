import React from "react";
import { Container, Row, Col } from "reactstrap";
import NotFound from "../Componnents/NotFound/NotFound";
const PageNotFound = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <NotFound />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageNotFound;
