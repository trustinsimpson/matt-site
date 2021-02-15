import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";

const About = () => {

  return (
    <Jumbotron fluid className="lead mb-0" style={styles.image}>
      <Container fluid>
        <h1>Welcome!</h1>
        <p>
          A drafting agency that cares as much about your next home as you do.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default About;
