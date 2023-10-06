// src/stores/tetrisStore.ts

import { defineStore } from "pinia";
import { ref } from "vue";

export const useTetrisStore = defineStore("tetris", () => {
  // Define the game board's state
  const board = ref(Array(20).fill(Array(10).fill(0)));

  const tetrominoPosition = ref({ x: 4, y: 0 }); // Tetromino's starting position
  const shapes = {
    T: [
      [
        [0, 1, 0],
        [1, 1, 1],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 0],
      ],
      // ... more rotations for T shape
    ],
    L: [
      [
        [2, 0],
        [2, 0],
        [2, 2],
      ],
      // ... more rotations for L shape
    ],
    // ... definitions for O and I shapes, using 3, 4, etc. as identifiers
  };
  const currentShape = ref(shapes.T[0]);
  const rotationIndex = ref(0);

  // Define methods for game logic, movement, rotation, and collision detection
  const moveLeft = () => {
    // ... implementation
  };

  const moveRight = () => {
    // ... implementation
  };

  const moveDown = () => {
    // ... implementation
  };

  const rotate = () => {
    // ... implementation
  };

  const hasCollision = () => {
    for (let y = 0; y < currentShape.value.length; y++) {
      for (let x = 0; x < currentShape.value[y].length; x++) {
        if (
          currentShape.value[y][x] &&
          (board.value[y + tetrominoPosition.value.y] &&
            board.value[y + tetrominoPosition.value.y][
              x + tetrominoPosition.value.x
            ]) !== 0
        ) {
          return true; // Collision detected
        }
      }
    }
    return false;
  };

  const lockTetromino = () => {
    for (let y = 0; y < currentShape.value.length; y++) {
      for (let x = 0; x < currentShape.value[y].length; x++) {
        if (currentShape.value[y][x]) {
          board.value[y + tetrominoPosition.value.y][
            x + tetrominoPosition.value.x
          ] = 1; // For simplicity, using '1' for T shape. Adjust for different Tetrominoes.
        }
      }
    }
    spawnNewTetromino(); // Placeholder for function that spawns a new Tetromino at the top
  };
  const spawnNewTetromino = () => {};

  const getCellClass = (cell: number) => {
    // Empty cell
    if (cell === 0) return "cell";
    switch (cell) {
      case 1:
        return "cell cell-color-1";
      case 2:
        return "cell cell-color-2";
      // Add more cases as you introduce more Tetrominoes/colors.
      default:
        return "cell";
    }
  };

  return {
    board,
    getCellClass,
    tetrominoPosition,
    moveLeft,
    moveRight,
    moveDown,
    rotate,
    hasCollision,
    lockTetromino,
    currentShape,
    rotationIndex,
  };
});
