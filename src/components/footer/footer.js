import React from "react";
import { Container } from 'react-bootstrap';
import "./footer.css";

// change font to Avant Garde that is smoother and not as aggressive


const Footer = () => {
  return (
    <div fluid className="footerDiv mb-0 tw-m-0">
      <Container className="footerText tw-text-white text-center">
        <h6>Like what you see?</h6>
        <h1 className="tw-font-bold">Let's talk!</h1>
        <p className="tw-m-0">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
