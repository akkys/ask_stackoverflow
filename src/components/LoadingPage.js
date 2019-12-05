import React from "react";
import { Container } from "react-bootstrap";

const LoadingPage = () => {
  return (
    <div>
      <Container>
        <h4 style={{ margin: "25px", color: "red" }}>
          <i className="fa fa-circle-o-notch fa-spin" />
          {` `}Loading..... Please Wait!!!
        </h4>
      </Container>
    </div>
  );
};

export default LoadingPage;
