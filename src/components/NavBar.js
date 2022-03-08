import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import planet from '../images/planet.png';

function NavBar() {
  return (
    <Navbar expand="xxl" sticky="top" variant="light" bg="light" className="border-bottom Navbar">
      <Container>
        <LinkContainer to="/" className="LogoContainer MyLink" rel="noopener noreferrer">
          <Navbar.Brand>
            <img src={planet} alt="Planet logo" className="Logo" />
            Space Travelers&apos; Hub
          </Navbar.Brand>
        </LinkContainer>
        <div className="ms-auto d-flex">
          <LinkContainer to="/" rel="noopener noreferrer" className="MyLink">
            <Nav.Link>Rockets</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Missions/" className="MyLink" rel="noopener noreferrer">
            <Nav.Link>Missions</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/MyProfile/" className="MyLink" rel="noopener noreferrer">
            <Nav.Link>My Profile</Nav.Link>
          </LinkContainer>
        </div>
      </Container>

    </Navbar>

  );
}

export default NavBar;
