import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

const Middle = () => {
  return (
    <Jumbotron fluid className="text mb-0 tw-bg-white">
      <Container className="text-center">
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Middle;
