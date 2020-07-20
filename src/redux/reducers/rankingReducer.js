import { UPDATE_RANKING } from '../action';

const initialState = localStorage.ranking ? JSON.parse(localStorage.ranking) : [];

export default (state = initialState, { type, newPlayer }) => {
  let newState;
  switch (type) {
    case UPDATE_RANKING:
      newState = [...state, newPlayer];
      localStorage.ranking = JSON.stringify(newState);
      return newState;

    default:
      return state;
  }
};
