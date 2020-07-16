import { UPDATE_PLAYER } from '../action';

const initialState = {
  score: 0,
};

export default (state = initialState, { type, player }) => {
  switch (type) {
    case UPDATE_PLAYER:
      return { ...state, ...player };

    default:
      return state;
  }
};
