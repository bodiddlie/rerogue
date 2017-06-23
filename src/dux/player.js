export const initialState = {
  x: 5,
  y: 5,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_UP: {
      return { ...state, y: state.y - 1 };
    }
    case MOVE_DOWN: {
      return { ...state, y: state.y + 1 };
    }
    default: {
      return state;
    }
  }
}

//ACTIONS
const MOVE_UP = '[Player] Move Up';
const MOVE_DOWN = '[Player] Move Down';

export function moveUp() {
  return { type: MOVE_UP };
}

export function moveDown() {
  return { type: MOVE_DOWN };
}
