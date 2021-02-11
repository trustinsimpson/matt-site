import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BP from '../assets/blueprints2.jpg';
import Construction from '../assets/house-with-blueprint.jpg';
import CompModel from '../assets/3d.jpg';
import Finished from '../assets/finishedHome.jpg';


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
      backgroundColor: 'rgba(0, 0, 0, 0.55)'
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
    <Carousel className="tw-mt-0">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: picHeight }}
          src={BP}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Drafting</h3>
          <p>Your dream home starts with the concept! We'll help you get it right the first time!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 tw-overscroll-none"
          style={{ height: picHeight }}
          src={CompModel}
          alt="Third slide"
        />
                  <div style={styles.overlay}>
          </div>
        <Carousel.Caption>
          <h3>Computer Modeling</h3>
          <p>
            Want to know exactly what your home will look like before you break ground? No problem!
            </p>
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
          <h3>Revisions</h3>
          <p>
          Got a set of plans but not quite your dream? We can fix that!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: picHeight }}
          src={Finished}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Here To The End</h3>
          <p>
          We started this together and we'll be here for you until the sweet finish!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Caro;