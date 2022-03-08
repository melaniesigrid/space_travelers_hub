const GET_MISSIONS_SUCCESS = 'missionStore/missions/GET_MISSIONS_SUCCESS';
const initialState = [];

export const getMissionsSuccess = (payload) => ({
  type: GET_MISSIONS_SUCCESS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
};

export default reducer;

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = () => async (dispatch) => {
  const response = await fetch(url);
  const missions = await response.json();
  const formatMissions = missions.map((e) => {
    const obj = {
      mission_id: e.mission_id,
      mission_name: e.mission_name,
      description: e.description,
    };
    return obj;
  });
  dispatch(getMissionsSuccess(formatMissions));
};
