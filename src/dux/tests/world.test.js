import reducer, { initialState } from '../world';

describe('World Reducer', () => {
  it('starts in the intial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual(initialState);
  });
});
