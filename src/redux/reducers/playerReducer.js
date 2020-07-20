import { UPDATE_PLAYER, UPDATE_SCORE } from '../action';

const initialState = localStorage.state ? {
  ...JSON.parse(localStorage.state),
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
      break;

    case UPDATE_SCORE:
      newState = {
        ...state,
        ...player,
        assertions: state.assertions + 1,
      };
      break;

    default:
      return state;
  }
  localStorage.state = JSON.stringify({ player: newState });
  return newState;
};
