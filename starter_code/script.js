window.onload = function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');

  var img = new Image();
  img.src = 'images/road.PNG';
  let carimg = new Image();
  carimg.src = 'images/car.png'

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }

var backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
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
  y: 0,

  move: function
}

function updateCanvas() {
  backgroundImage.move();

  context.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;
};
