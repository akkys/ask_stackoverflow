import React from "react";
import { FormControl, Row, Col, InputGroup } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div>
      <Row>
        <Col sm="1"></Col>
        <Col sm="10">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className="fa fa-search" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              name="searchQue"
              placeholder="Search..."
              className="mr-sm-2"
              id="search-box"
            />
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
