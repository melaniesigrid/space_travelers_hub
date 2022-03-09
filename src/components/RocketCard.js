import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Badge } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { reserveRocket, cancelRocket } from '../redux/rockets';

function RocketCard({
  id,
  rocketName,
  description,
  flickrImages,
  reserved,
}) {
  const dispatch = useDispatch();
  const reserveMyRocket = (id) => {
    dispatch(reserveRocket(id));
  };
  const cancelMyRocket = (id) => {
    dispatch(cancelRocket(id));
  };
  return (
    <Card key={id} expand="md" className="HorizontalCard">
      <Card.Img variant="left" src={flickrImages} className="RocketImage" />
      <Card.Body>
        <Card.Title>{rocketName}</Card.Title>
        {
          reserved
            ? (
              <div>
                <Card.Text>
                  <Badge bg="info">Reserved</Badge>
                  {' '}
                  {description}
                </Card.Text>
                <Button variant="outline-secondary" className="CancelButton" onClick={() => cancelMyRocket(id)}>Cancel Rocket</Button>
              </div>
            )
            : (
              <div>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary" className="ReserveButton" onClick={() => reserveMyRocket(id)}>Reserve Rocket</Button>
              </div>
            )
        }
      </Card.Body>
    </Card>
  );
}

RocketCard.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketCard;
