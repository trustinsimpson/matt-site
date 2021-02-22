import React from "react";
import { Button, Container } from "react-bootstrap";
import background from "../../assets/home.jpg";
import "./header.css";

const Header = () => {

  return (
    <div className="heroImage" style={{backgroundImage: `url(${background})`}}>
    <div className="heroOverlay"></div>
    
      <Container fluid className="tw-relative tw-text-white tw-p-9">
        <h1>Welcome Home!</h1>
        <p className="tw-font-semibold">
          MM Designs, where we care as much about your next home as you do.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Container>
    
    </div>
  );
};

export default Header;
