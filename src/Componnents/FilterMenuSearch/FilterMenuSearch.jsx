import React from "react";
import "./FilterMenuSearch.css";
import { Row, Col } from "reactstrap";
import { Search } from "lucide-react";
const FilterMenuSearch = () => {
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <Search color="White" size={30} />
        </Col>
      </Row>
    </>
  );
};

export default FilterMenuSearch;
