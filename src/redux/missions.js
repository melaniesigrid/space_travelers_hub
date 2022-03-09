const GET_MISSIONS_SUCCESS = 'applicationStore/missionsReducer/GET_MISSIONS_SUCCESS';
const JOIN_MISSION = 'applicationStore/missionsReducer/JOIN_MISSION';
const initialState = [];

export const getMissionsSuccess = (payload) => ({
  type: GET_MISSIONS_SUCCESS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const missions = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_SUCCESS:
      return [...state, ...action.payload];

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });

    default:
      return state;
  }
};

export default missions;

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = () => async (dispatch) => {
  const response = await fetch(url);
  const missions = await response.json();
  const formatMissions = missions.map((e) => {
    const obj = {
      mission_id: e.mission_id,
      mission_name: e.mission_name,
      description: e.description,
      reserved: false,
    };
    return obj;
  });
  dispatch(getMissionsSuccess(formatMissions));
};
