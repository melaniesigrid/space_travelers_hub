import React from 'react';
import { PropTypes } from 'prop-types';

const MissionList = ({ id, name, description }) => (
  <>
    <tr key={id}>
      <th scope="row">{name}</th>
      <td className="w-50">{description}</td>
      <td><span className="badge bg-secondary">Not a Member</span></td>
      <td><button type="button" className="btn btn-outline-secondary">Join Mission</button></td>
    </tr>
  </>
);

MissionList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionList;
