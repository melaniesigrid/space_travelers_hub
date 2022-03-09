import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { reserveRocket } from '../redux/rockets';

function RocketCard({
  id,
  rocketName,
  description,
  flickrImages,
}) {
  const dispatch = useDispatch();
  const reserveMyRocket = (id) => {
    dispatch(reserveRocket(id));
  };
  return (
    <Card key={id} expand="md" className="HorizontalCard">
      <Card.Img variant="left" src={flickrImages} className="RocketImage" />
      <Card.Body>
        <Card.Title>{rocketName}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" className="ReserveButton" onClick={() => reserveMyRocket(id)}>Reserve Rocket</Button>
      </Card.Body>
    </Card>
  );
}

RocketCard.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default RocketCard;
