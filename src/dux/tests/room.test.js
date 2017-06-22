import reducer, { initialState, generateRoom } from '../room';

describe('Room Reducer', () => {
  it('starts in an initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('builds a room with 76 wall tiles, 1 exit tile, and 323 ground tiles', () => {
    const result = reducer(undefined, generateRoom());
    const allTiles = result.reduce((prev, cur) => [...prev, ...cur], []);
    const wallTiles = allTiles.filter(t => t.type === 'wall');
    const exitTiles = allTiles.filter(t => t.type === 'exit');
    const groundTiles = allTiles.filter(t => t.type === 'ground');
    expect(wallTiles).toHaveLength(76);
    expect(exitTiles).toHaveLength(1);
    expect(groundTiles).toHaveLength(323);
  });
});
