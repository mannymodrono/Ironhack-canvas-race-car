window.onload = function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

    context.fillStyle='green';
    context.fillRect(0, 0, 600, 925);
    context.fillStyle = 'grey';
    context.fillRect(30, 0, 540, 925)
    context.fillStyle='white';
    context.fillRect(40, 0, 15, 925);
    context.fillRect(540, 0, 15, 925);
    context.fillRect(300, 0, 15, 80);
    context.fillRect(300, 100, 15, 80);
    context.fillRect(300, 200, 15, 80);
    context.fillRect(300, 300, 15, 80);
    context.fillRect(300, 400, 15, 80);
    context.fillRect(300, 500, 15, 80);
    context.fillRect(300, 600, 15, 80);
    context.fillRect(300, 700, 15, 80);
    context.fillRect(300, 800, 15, 80);
    context.fillRect(300, 900, 15, 80);
    context.fillRect(300, 1000, 15, 80);

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    
  }
};
