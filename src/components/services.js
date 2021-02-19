import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import Navi from "./navi";


// Create cards for each service. When clicked the card expands with product description

const Services = () => {
  return (
    <div>
      <Navi />
      <Jumbotron fluid>
        <Container fluid>
          <h1>Services!</h1>
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

export default Services;