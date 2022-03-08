import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  return (
    <div>
      Mission
    </div>
  );
};

export default Missions;
