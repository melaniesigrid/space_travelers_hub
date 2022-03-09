import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import RocketCard from './RocketCard';

const Rockets = () => {
  const myRockets = useSelector((state) => state.rockets);
  return (
    <Container>
      <br />
      {
        myRockets.map((rocket) => (
          <RocketCard
            key={rocket.id}
            id={rocket.id}
            rocketName={rocket.rocketName}
            description={rocket.description}
            flickrImages={rocket.flickrImages[0]}
          />
        ))
      }
    </Container>
  );
};

export default Rockets;
