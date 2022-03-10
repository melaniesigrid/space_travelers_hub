import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions';
import MissionList from './MissionList';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length < 1) {
      dispatch(getMissions());
    }
  }, [missions]);

  return (
    <>
      <br />
      <br />
      <div className="container">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Mission</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">.</th>
              </tr>
            </thead>
            <tbody>
              {
                missions.map((mission) => (
                  <MissionList
                    id={mission.mission_id}
                    name={mission.mission_name}
                    description={mission.description}
                    reserved={mission.reserved}
                    key={mission.mission_id}
                  />
                ))

              }
            </tbody>
          </table>
        </div>

      </div>

    </>
  );
};

export default Missions;
