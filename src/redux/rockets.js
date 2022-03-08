const GET_ROCKETS = 'applicationStore/rocketsReducer/GET_ROCKETS';
const initialState = [];
const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

export const getRocketsAction = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export const getRocketsApi = () => async (dispatch) => {
  const response = await fetch(rocketsUrl);
  const rockets = await response.json();
  const formatRockets = rockets.map((e) => {
    const obj = {
      id: e.id,
      rocket_name: e.rocket_name,
      description: e.description,
      flickr_images: e.flickr_images,
    };
    return obj;
  });
  dispatch(getRocketsAction(formatRockets));
};

export default { rocketsReducer, getRocketsApi };
