import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/house.png";

const Navi = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
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
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#link">Services</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;
