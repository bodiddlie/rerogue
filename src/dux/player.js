export const initialState = {
  x: 5,
  y: 5,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_PLAYER: {
      const x = state.x + action.dx;
      const y = state.y + action.dy;
      return { ...state, x, y };
    }
    default: {
      return state;
    }
  }
}

//ACTIONS
const MOVE_PLAYER = '[Player] Move Player';

export function movePlayer(dx, dy) {
  return { type: MOVE_PLAYER, dx, dy };
}
