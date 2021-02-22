import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

// find this font family - ITCAvantGardePro-Bold,Helvetica,sans-serif


const Footer = () => {
  return (
    <div fluid className="mb-0 tw-bg-gray-800 tw-m-0">
      <Container className="tw-text-white text-center">
        <p>Like what you see?</p>
        <h1>Let's talk!</h1>
        <p className="tw-m-0">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
