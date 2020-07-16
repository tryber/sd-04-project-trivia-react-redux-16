import { UPDATE_RANKING } from '../action';

const initialState = localStorage.ranking ? JSON.parse(localStorage.ranking) : [];

export default (state = initialState, { type, ranking }) => {
  switch (type) {
    case UPDATE_RANKING:
      return [...state, ...ranking];

    default:
      return state;
  }
};
