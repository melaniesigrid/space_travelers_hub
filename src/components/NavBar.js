import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

function NavBar() {
  return (
    <header>
      <nav>
        <NavLink to="/" className="LogoContainer" rel="noopener noreferrer">
          <img src={planet} alt="Planet logo" className="Logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </NavLink>

        <NavLink to="/" activeClassName="selected" rel="noopener noreferrer">
          Rockets
        </NavLink>

        <NavLink to="/Missions/" rel="noopener noreferrer">
          Missions
        </NavLink>

        <NavLink to="/MyProfile/" rel="noopener noreferrer">
          My Profile
        </NavLink>

      </nav>
    </header>
  );
}

export default NavBar;
