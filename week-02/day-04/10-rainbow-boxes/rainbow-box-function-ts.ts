'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.

// Create a loop that fills the canvas with rainbow colored squares.

function rainbowBox(size: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(300 - (size / 2 ), 200  - (size / 2 ), size, size);
}

for (let i: number = 0; i < 600; i ++) {
  rainbowBox(600 - i , `hsl(${i}, 100%, 50%)`);
}
