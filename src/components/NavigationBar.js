import React from "react";
import { Navbar, Form } from "react-bootstrap";
import logo from "../so-logo.png";

import SearchBar from "./SearchBar";

const NavigationBar = props => {
  return (
    <div>
      <Navbar bg="light" expand="md" id="navbar_border">
        <Navbar.Brand href="">
          <img
            src={logo}
            alt="logo"
            style={{ width: "150px", height: "35px", marginLeft: "30px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="col-sm-10" onSubmit={props.formSubmit}>
            <SearchBar />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
