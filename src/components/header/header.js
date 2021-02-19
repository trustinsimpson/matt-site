import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import background from "../../assets/home2.jpg";
import "./header.css";

const Header = () => {
  const styles = {
    image: {
      backgroundImage: `url(${background})`,
      minHeight: "56rem",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // objectFit: "cover",
      display: "block",
      // paddingTop: "5rem",
      // paddingBottom: "20%"
    },
  };

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

export default Header;
