import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const Navi = () => {
  return (
    <Navbar bg="light" expand="lg" className="bg-lightBlue">
      <Navbar.Brand href="#home">
        <img
          src="/assets/houseBP.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top mr-1 rounded-lg"
          alt="React Bootstrap logo"
        />
        Matt's Drafting
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;