import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/house.png";

class Navi extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <LinkContainer to="/">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="26"
              height="26"
              className="d-inline-block align-top tw-mr-1"
              alt="Blue Print logo"
            />
            Matt's Drafting
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/about">
              <Nav.Link href="#about">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link href="#caro">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link href="#link">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navi;
