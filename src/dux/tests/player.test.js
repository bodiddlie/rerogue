import reducer, { initialState, movePlayer } from '../player';

describe('Player Reducer', () => {
  it('starts in an initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('can move the player up', () => {
    const result = reducer(initialState, movePlayer(0, -1));
    expect(result.y).toBe(initialState.y - 1);
  });

  it('can move the player down', () => {
    const result = reducer(initialState, movePlayer(0, 1));
    expect(result.y).toBe(initialState.y + 1);
  });

  it('can move the player left', () => {
    const result = reducer(initialState, movePlayer(-1, 0));
    expect(result.x).toBe(initialState.x - 1);
  });

  it('can move the player right', () => {
    const result = reducer(initialState, movePlayer(1, 0));
    expect(result.x).toBe(initialState.x + 1);
  });
});
