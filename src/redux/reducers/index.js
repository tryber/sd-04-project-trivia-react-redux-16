import { combineReducers } from 'redux';
import player from './playerReducer';
import ranking from './rankingReducer';

export default combineReducers({ player, ranking });
