import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import background from './assets/house.jpg';

const Header = () => {
  return (
    <Jumbotron className="tw-h" style={{ height: '80vh', backgroundImage: `url(${background})`}}>
      <h1>Welcome!</h1>
      <p>
        A drafting agency that cares as much about your next home as you do.
      </p>
      <p>
        <Button variant="primary" className="bg-lightBlue-400">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Header;