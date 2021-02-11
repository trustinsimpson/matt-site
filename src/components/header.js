import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import background from "../assets/home.jfif";

const Header = () => {
  return (
    <Jumbotron
      fluid
      className="lead tw-box-content tw-min-h-screen tw-bg-cover mb-0"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container fluid>
        <h1>Welcome!</h1>
        <p>
          A drafting agency that cares as much about your next home as you do.
        </p>
        <p>
          <Button variant="primary" >Learn more</Button>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Header;
