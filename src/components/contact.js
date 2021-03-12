import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import Navi from "./navi";

// Make contact form, align in middle of page
// Make background image a beautiful home?

const Contact = () => {
  return (
    <div>
      <Navi />
      <Jumbotron fluid>
        <Container fluid className="text">
          <h1>Contact!</h1>
          <p>
            A drafting agency that cares as much about your next home as you do.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Contact;