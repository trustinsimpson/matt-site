import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BP from '../assets/blueprints2.jpg';
import Construction from '../assets/house-with-blueprint.jpg';


const Caro = (props) => {

  const picHeight = '885px';

  const styles = {
    overlay: {
      zIndex: '1',
      height: '100%',
      width: '100%',
      position: 'absolute',
      overflow: 'auto',
      top: '0px',
      left: '0px',
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    image: {
      backgroundImage: `url(${props.link})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: picHeight }}
          src={BP}
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
          style={{ height: picHeight }}
          src={Construction}
          alt="Third slide"
        />
                  <div style={styles.overlay}>
          </div>
        <Carousel.Caption>
          <h3>Revisions</h3>
          <p>Got a set of plans but not quite your dream? We can fix that!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: picHeight }}
          src={Construction}
          alt="Third slide"
        />
          <div style={styles.overlay}>
          </div>
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