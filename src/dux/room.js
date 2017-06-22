import { getRandomInt } from './util';

const WIDTH = 20;
const HEIGHT = 20;

export const initialState = Array(HEIGHT).fill(Array(WIDTH).fill({ type: 'ground' }));

function reducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_ROOM: {
      const room = placeExit(buildEmptyRoom());
      return room;
    }
    default: {
      return state;
    }
  }
}

export default reducer;

function buildEmptyRoom() {
  const room = [];
  for (let i = 0; i < HEIGHT; i++) {
    if (i === 0 || i === 19) {
      room.push(Array(WIDTH).fill({ type: 'wall' }));
    } else {
      const row = Array(WIDTH).fill({ type: 'ground' });
      row[0] = { type: 'wall' };
      row[19] = { type: 'wall' };
      room.push(row);
    }
  }
  return room;
}

function placeExit(room) {
  const x = getRandomInt(1, 18);
  const y = getRandomInt(1, 18);

  return [...room.slice(0, y), [...room[y].slice(0, x), { type: 'exit' }, ...room[y].slice(x + 1)], ...room.slice(y + 1)];
}

//-------------------------------------------
// ACTION CONSTS and ACTION CREATORS
//-------------------------------------------
const GENERATE_ROOM = '[Room] Generate Room';

export function generateRoom() {
  return { type: GENERATE_ROOM };
}
