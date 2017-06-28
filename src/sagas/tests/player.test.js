import { select, put } from 'redux-saga/effects';

import { playerMove, tryMovePlayer, selectors } from '../player';
import { movePlayer } from '../../dux/player';
import { initialState } from '../../dux/room';

describe('player saga', () => {
  it('moves the player if legal', () => {
    const gen = playerMove(tryMovePlayer(1, 0));
    let result = gen.next().value;
    expect(result).toEqual(select(selectors.room));
    result = gen.next(initialState);
    expect(result.value).toEqual(select(selectors.player));
    result = gen.next({ x: 5, y: 5 });
    expect(result.value).toEqual(put(movePlayer(1, 0)));
  });

  it('does not move the player if blocked', () => {
    const gen = playerMove(tryMovePlayer(-1, 0));
    let result = gen.next().value;
    expect(result).toEqual(select(selectors.room));
    result = gen.next(initialState);
    expect(result.value).toEqual(select(selectors.player));
    result = gen.next({ x: 1, y: 1 });
    expect(result.done).toBe(true);
  });
});
