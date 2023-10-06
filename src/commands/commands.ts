import { useTetrisStore } from "../stores/tetrisStore";

const tetris = useTetrisStore();

export const commands = {
  MOVE_LEFT: {
    description: "Move tetromino to the left",
    action: () => tetris.moveLeft(),
  },
  MOVE_RIGHT: {
    description: "Move tetromino to the right",
    action: () => tetris.moveRight(),
  },
  MOVE_DOWN: {
    description: "Move tetromino down",
    action: () => tetris.moveDown(),
  },
  ROTATE: {
    description: "Rotate tetromino",
    action: () => tetris.rotate(),
  },
};
