import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import background from "../../assets/home.jpg";
import "./header.css";

const Header = () => {
  const styles = {
    image: {
      backgroundImage: `url(${background})`,
      minHeight: "55rem",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "block",
    },
    overlay: {
      zIndex: "0",
      height: "100%",
      width: "100%",
      position: "absolute",
      overflow: "auto",
      top: "0px",
      left: "0px",
      backgroundColor: "rgba(0, 0, 0, 0.55)",
    }
  };

  return (
    <div>
    <div style={styles.overlay}></div>
    <Jumbotron fluid className="lead mb-0 tw-text-white" style={styles.image}>
      <Container fluid className="tw-absolute tw-z-10">
        <h1>Welcome Home!</h1>
        <p className="tw-font-semibold">
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

export default Header;
