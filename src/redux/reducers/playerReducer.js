import { UPDATE_PLAYER, UPDATE_SCORE, RESET_PLAYER } from '../action';

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
      break;

    case UPDATE_SCORE:
      newState = {
        ...state,
        score: state.score + player.score,
        assertions: state.assertions + 1,
      };
      break;

    case RESET_PLAYER:
      return initialState;

    default:
      return state;
  }
  localStorage.state = JSON.stringify({ player: newState });
  return newState;
};
