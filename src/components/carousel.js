import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BP from '../assets/blueprints2.jpg';
import Construction from '../assets/house-with-blueprint.jpg';


const Caro = () => {
  return (
    <Carousel className="">
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="800"
          src={BP}
          // src="../assets/blueprints.gif/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Drafting!</h3>
          <p>Your dream home starts with the concept! We'll help you get it right the first time!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 tw-overscroll-none"
          src={Construction}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Revisions</h3>
          <p>Got a set of plans but not quite your dream? We can fix that!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Construction}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Caro;