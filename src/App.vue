<script setup lang="ts">
import { executeCommand } from "./commands/commandHandler";
import { onMounted, onUnmounted } from "vue";

// Sample event listener
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "ArrowLeft") {
    executeCommand("MOVE_LEFT");
  } else if (event.key === "ArrowRight") {
    executeCommand("MOVE_RIGHT");
  } else if (event.key === "ArrowDown") {
    executeCommand("MOVE_DOWN");
  } else if (event.key === "ArrowUp") {
    executeCommand("ROTATE");
  }
};

// Adding event listener for keydown events
onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

// Cleaning up on component unmount
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <div class="app">
    <!-- Render the Tetris Board -->
    <TetrisBoard />

    <!-- Render the Tetromino -->
    <!-- For now, this is just a static Tetromino. Later, you'd manage its position dynamically. -->
    <Tetromino style="position: absolute; top: 0px; left: 0px" />
  </div>
</template>

<style>
.app {
  position: relative;
  width: 300px; /* 10 cells * 30px */
  height: 600px; /* 20 cells * 30px */
  border: 3px solid black;
  background-color: #f5f5f5; /* Light gray background for better visibility */
  box-sizing: content-box;
}
.row {
  display: flex;
}

/* Apply the border-box property to all elements and pseudo-elements */
*,
*::before,
*::after {
  box-sizing: border-box;
}

.cell {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
}

.cell-color-1 {
  background-color: blue;
}

.cell-color-2 {
  background-color: red;
}
</style>
