import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import planet from '../images/saturn2.png';

function NavBar() {
  return (
    <Navbar activekey={window.location.pathname} expand="md" sticky="top" variant="dark" className="Navbar">
      <Container className="NavContainer">
        <LinkContainer to="/space_travelers_hub/" className="LogoContainer" rel="noopener noreferrer">
          <Navbar.Brand className="SpaceTravelers">
            <img src={planet} alt="Planet logo" className="Logo" />
            Space Travelers&apos; Hub
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto d-flex">
            <LinkContainer to="/space_travelers_hub/" rel="noopener noreferrer" className="MyLink">
              <Nav.Link>Rockets</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Missions/" className="MyLink" rel="noopener noreferrer">
              <Nav.Link>Missions</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/MyProfile/" className="MyLink" rel="noopener noreferrer">
              <Nav.Link>
                <span className="Separator">|</span>
                <span>My Profile</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>

  );
}

export default NavBar;
