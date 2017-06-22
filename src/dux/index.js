import { combineReducers } from 'redux';

import player from './player';
import world from './world';
import room from './room';

const gameState = combineReducers({
  player,
  world,
  room,
});

export default gameState;
