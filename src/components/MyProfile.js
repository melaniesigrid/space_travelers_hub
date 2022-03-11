import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Table } from 'react-bootstrap';

function MyProfile() {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="ProfileContent">
      <Container className="d-flex">
        <Container>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>My Missions</th>
              </tr>
            </thead>
            <tbody>
              {
                reservedMissions.map((mission) => (
                  <tr key={mission.mission_id}>
                    <td>{mission.mission_name}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Container>
        <Container>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>My Rockets</th>
              </tr>
            </thead>
            <tbody>
              {
                reservedRockets.map((rocket) => (
                  <tr key={rocket.id}>
                    <td>{rocket.rocketName}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
}

export default MyProfile;
