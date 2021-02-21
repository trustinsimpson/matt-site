import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import Navi from "./navi";
import BP from "../assets/bp_thumbnail.jpg";

// Create cards for each service. When clicked the card expands with product description
// Try top and bottom borders on page and make initial card size smaller
// When on mobile, ditch top and bottom boarders and vertically align cards?

const Services = () => {
  const styles = {
    image: {
      width: "100%",
      height: "auto",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  return (
    <div>
      <Navi />
      <CardDeck className="tw-pt-10 tw-px-4">
        <Card>
          <Card.Header as="h5">Drafting</Card.Header>
          <Card.Img variant="top" src={BP} style={styles.image} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header as="h5">Computer Modeling</Card.Header>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header as="h5">Revisions</Card.Header>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Services;
