console.log("Webpack is working!");

const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 1500;
  canvasEl.height = 1000;

  const ctx = canvasEl.getContext("2d");

  const myAst = new MovingObject({pos: [5, 5], vel: [1, 1], radius: 20, color: 'green'});

  myAst.draw(ctx);
});
