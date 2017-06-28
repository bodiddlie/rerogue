import { select, put, takeEvery } from 'redux-saga/effects';

import { movePlayer } from '../dux/player';

//----------------------------------
// ACTIONS
//----------------------------------
const TRY_MOVE_PLAYER = '[Player Saga] Try Move Player';

export function tryMovePlayer(dx, dy) {
  return { type: TRY_MOVE_PLAYER, dx, dy };
}

//----------------------------------
// SAGAS
//----------------------------------
export function* playerMove(action) {
  const { dx, dy } = action;
  const roomState = yield select(selectors.room);
  const playerState = yield select(selectors.player);
  const { x, y } = playerState;

  if (roomState[x + dx][y + dy].type === 'ground') {
    yield put(movePlayer(dx, dy));
  }
}

export function* watchPlayerMove() {
  yield takeEvery(TRY_MOVE_PLAYER, playerMove);
}

//----------------------------------
// SELECTORS
//----------------------------------
export const selectors = {
  room: state => state.room,
  player: state => state.player,
};
