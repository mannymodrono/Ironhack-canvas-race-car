window.onload = function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');

  var img = new Image();
  img.src = 'images/road.PNG';
  let carimg = new Image();
  carimg.src = 'images/car.png'

  document.getElementById("start-button").onclick = function () {
    startGame();
  };
  
  function drawObstacles() {
    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
      case 0: topObstacle(); break;
      case 1: midObstacle(); break;
      case 2: bottomObstacle(); break;
    }
  }


  function startGame() {
    backgroundUpdate();

    const obstacleTimer = setInterval(drawObstacles, 4000);
  }


  var backgroundImage = {
    img: img,
    x: 0,
    speed: -1,

    move: function () {
      this.x += this.speed;
      this.x %= canvas.width;
    },

    draw: function () {
      context.drawImage(this.img, this.x, 0);
      if (this.speed < 0) {
        context.drawImage(this.img, this.x + canvas.width, 0);
      } else {
        context.drawImage(this.img, this.x - this.img.width, 0);
      }
    },
  };

  let carImg = {
    img: carimg,
    y: 240,
    x: 150,
    speed: 10,

    draw: function () {
      context.drawImage(this.img, this.x, this.y, 230, 130);
    },

    moveUp: function () { this.y -= this.speed },
    moveDown: function () { this.y += this.speed },
  }

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 38: carImg.moveUp(); break;
      case 40: carImg.moveDown(); break;
    }
    updateCanvas();
  }


  function updateCanvas() {
    carImg.draw();
    requestAnimationFrame(updateCanvas);
  }


  function backgroundUpdate() {
    backgroundImage.move();
    context.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImage.draw();
    requestAnimationFrame(backgroundUpdate);
  }

  // start calling updateCanvas once the image is loaded
  img.onload = updateCanvas;
};
