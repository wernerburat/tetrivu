<script setup lang="ts">
import { useTetrisStore } from "../stores/tetrisStore";

// Access the Tetris store
const tetris = useTetrisStore();
</script>

<template>
  <div class="tetromino">
    <div
      v-for="(row, rowIndex) in tetris.currentShape"
      :key="rowIndex"
      class="row"
    >
      <div
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        :class="tetris.getCellClass(cell)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
/* You can add more colors as you define more Tetrominoes */
</style>
