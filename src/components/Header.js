import React from "react";
import { Container } from "react-bootstrap";

const Header = props => {
  return (
    <Container>
      <h3 style={{ margin: "25px 25px 10px 25px" }}>{props.title}</h3>
      <p
        style={{
          margin: "15px 25px 25px 25px",
          fontSize: "18px"
        }}
      >
        {props.totalQuestions.length} results
      </p>
      <hr />
    </Container>
  );
};

export default Header;
