import { combineReducers } from 'redux';

import GameItems from './game-items';
import PlayerItems from './player-items';

const rootReducer = combineReducers({
  gameItems: GameItems,
  playerItems: PlayerItems,
});

export default rootReducer;
