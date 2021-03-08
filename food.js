export const food = (function foodDisplayFn() {
  let canvas = document.querySelector("#board");
  let ctx = canvas.getContext("2d");

  function addFoodItem(left, top) {
    ctx.fillStyle = "#c82124";
    ctx.beginPath();
    ctx.arc(left, top, 4, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }

  function remvoveFoodItem() {
    ctx.fillStyle = "#c82124";
    ctx.beginPath();
    ctx.arc(5, 5, 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }

  return {
    addFoodItem: addFoodItem,
    remvoveFoodItem: remvoveFoodItem,
  };
})();
