import React from 'react';
import './App.scss';
import {
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="bg-dark App">
      <NavBar />
      <Routes>
        <Route path="/space_travelers_hub/" element={<Rockets />} />
        <Route path="/Missions/" element={<Missions />} />
        <Route path="/MyProfile/" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
