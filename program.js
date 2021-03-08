import { food } from "./food.js";
import { pacman } from "./pacman.js";

(function gameStart() {
  (function setBoard() {
    let canvas = document.querySelector("#board");
    let canvasCtx = canvas.getContext("2d");
    canvasCtx.fillStyle = "grey";
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
  })();

  (function initiatePacman() {
    pacman.initiate(240, 130);
  })();

  (function addFoodToBaord() {
    for (let i = 1; i < 6; i++) {
      food.addFoodItem(20, 20 * i);
    }
  })();
})();
