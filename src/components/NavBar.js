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
        <ul>
          <li>
            <NavLink to="/" activeClassName="selected" rel="noopener noreferrer">
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/Missions/" rel="noopener noreferrer">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/MyProfile/" rel="noopener noreferrer">
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
