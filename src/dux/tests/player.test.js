import reducer, { initialState, moveUp, moveDown } from '../player';

describe('Player Reducer', () => {
  it('starts in an initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('can move the player up', () => {
    const result = reducer(initialState, moveUp());
    expect(result.y).toBe(initialState.y - 1);
  });

  it('can move the player down', () => {
    const result = reducer(initialState, moveDown());
    expect(result.y).toBe(initialState.y + 1);
  });
});
