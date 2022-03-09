import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions';

const MissionList = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr key={id}>
        <th scope="row">{name}</th>
        <td className="w-50">{description}</td>
        <td><span className="badge bg-secondary">Not a Member</span></td>
        <td>
          {
          reserved === false ? <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(joinMission(id))}>Join Mission</button>
            : <button type="button" className="btn btn-outline-info">Leave Mission</button>
          }
        </td>
      </tr>
    </>
  );
};

MissionList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionList;
