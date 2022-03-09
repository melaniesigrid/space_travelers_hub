const GET_ROCKETS = 'applicationStore/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'applicationStore/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET_RESERVATION = 'applicationStore/rockets/CANCEL_ROCKET_RESERVATION';
const initialState = [];
const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

export const getRocketsAction = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET_RESERVATION,
  payload,
});

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, ...action.payload];

    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });

    case CANCEL_ROCKET_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });

    default:
      return state;
  }
};

export default rockets;

export const getRocketsApi = () => async (dispatch) => {
  const response = await fetch(rocketsUrl);
  const rockets = await response.json();
  const formatRockets = rockets.map((e) => {
    const obj = {
      id: e.id,
      rocketName: e.rocket_name,
      description: e.description,
      flickrImages: e.flickr_images,
      reserved: false,
    };
    return obj;
  });
  dispatch(getRocketsAction(formatRockets));
};
