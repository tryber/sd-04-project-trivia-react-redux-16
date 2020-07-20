import { UPDATE_PLAYER } from '../action';

const initialState = localStorage.state ? {
  ...JSON.parse(localStorage.state).player,
  score: 0,
  assertions: 0,
}
  : {
    score: 0,
    assertions: 0,
  };

export default (state = initialState, { type, player }) => {
  let newState;
  switch (type) {
    case UPDATE_PLAYER:
      newState = { ...state, ...player };
      localStorage.state = JSON.stringify(newState);
      return newState;

    default:
      return state;
  }
};
