export const pacman = (function pacmanOpsFn() {
  let canvas = document.querySelector("#board");
  let canvasCtx = canvas.getContext("2d");

  function Dimension(left, top) {
    return {
      left: left,
      top: top,
    };
  }
  let currentDimension;

  function removeRendered({ left, top }) {
    canvasCtx.fillStyle = "grey";
    canvasCtx.beginPath();
    canvasCtx.arc(left, top, 10, 0, Math.PI * 2, true);
    canvasCtx.closePath();
    canvasCtx.fill();
  }

  function render({ left, top }) {
    canvasCtx.fillStyle = "#FFFF00";
    canvasCtx.beginPath();
    canvasCtx.arc(left, top, 10, 0, Math.PI * 2, true);
    canvasCtx.closePath();
    canvasCtx.fill();
  }

  function initiate(left, top) {
    currentDimension = new Dimension(left, top);
    render(currentDimension);
    document.addEventListener("keydown", function moveInDirection(event) {
      const callback = {
        ArrowLeft: moveLeft,
        ArrowRight: moveRight,
        ArrowDown: moveDown,
        ArrowUp: moveUp,
      }[event.key];
      callback?.();
    });
  }

  function moveUp() {
    removeRendered(currentDimension);
    currentDimension = new Dimension(
      currentDimension.left,
      currentDimension.top - 1
    );
    render(currentDimension);
  }

  function moveDown() {
    removeRendered(currentDimension);
    currentDimension = new Dimension(
      currentDimension.left,
      currentDimension.top + 1
    );
    render(currentDimension);
  }
  function moveRight() {
    removeRendered(currentDimension);
    currentDimension = new Dimension(
      currentDimension.left + 1,
      currentDimension.top
    );
    render(currentDimension);
  }
  function moveLeft() {
    removeRendered(currentDimension);
    currentDimension = new Dimension(
      currentDimension.left - 1,
      currentDimension.top
    );
    render(currentDimension);
  }
  return {
    initiate: initiate,
  };
})();
