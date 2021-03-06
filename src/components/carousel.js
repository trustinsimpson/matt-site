import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BP from "../assets/blueprints1.jpg";
import Construction from "../assets/house-with-blueprint1.jpg";
import CompModel from "../assets/3dRender1.jpg";

const Caro = () => {

  const styles = {
    overlay: {
      zIndex: "1",
      height: "100%",
      width: "100%",
      position: "absolute",
      overflow: "auto",
      top: "0px",
      left: "0px",
      backgroundColor: "rgba(0, 0, 0, 0.55)",
    },
    image: {
      width: "100%",
      height: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  return (
    <Carousel className="text tw-mt-0">
      <Carousel.Item>
        <img
          className="d-block"
          style={styles.image}
          src={BP}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Drafting</h3>
          <p>
            Your dream home starts with the concept! We'll help you get it right
            the first time!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block tw-overscroll-none"
          style={styles.image}
          src={CompModel}
          alt="Third slide"
        />
        <div style={styles.overlay}></div>
        <Carousel.Caption>
          <h3>Computer Modeling</h3>
          <p>
            Want to know exactly what your home will look like before you break
            ground? No problem!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={styles.image}
          src={Construction}
          alt="Third slide"
        />
        <div style={styles.overlay}></div>
        <Carousel.Caption>
          <h3>Revisions</h3>
          <p>Got a set of plans but not quite your dream? We can fix that!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Caro;
