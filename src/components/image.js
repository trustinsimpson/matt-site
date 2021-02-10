import React from 'react';

const Image = (props) => {
  const image = {
    backgroundImage: `url(${props.link})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div stlye={image}>
    </div>
  )
}

export default Image;