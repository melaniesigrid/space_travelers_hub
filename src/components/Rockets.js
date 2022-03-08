import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRocketsApi } from '../redux/rockets';

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsApi());
  }, []);
  return (
    <div>
      Rockets
    </div>
  );
}

export default Rockets;
