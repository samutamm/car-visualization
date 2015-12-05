var continueMoving1 = true;

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

function drawPoints(points, context) {
  for(i in points) {
    var line = points[i];
    context.beginPath();
    context.rect(line.x, line.y, line.width, line.height);
    context.fillStyle = '#ff0000';
    context.fill();
    context.stroke();
  }
}

function drawLine(line, context) {
  context.beginPath();
  context.rect(line.x, line.y, line.width, line.height);
  context.fillStyle = '#8ED6FF';
  context.fill();
  context.strokeStyle = 'black';
  context.stroke();
}
function drawRoute(lines, context) {
  for(i in lines) {
    drawLine(lines[i], context);
  }
}

function drawRectangle(myRectangle, context) {
  context.beginPath();
  context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
  context.fillStyle = '#8ED6FF';
  context.fill();
  context.lineWidth = myRectangle.borderWidth;
  context.strokeStyle = 'black';
  context.stroke();
}
function animate1(myRectangle, canvas, context) {
  console.log("animate1");
  if(continueMoving1) {
    var newX = myRectangle.x - 3;
    var newY = myRectangle.y - 3;
    var minimumX = 10;
    var minimumY = 60;
    if(newX > minimumX) {
      myRectangle.x = newX;
    } else {
      if (newY > minimumY) {
        myRectangle.y = newY;
      } else {
        continueMoving1 = false;
        console.log("Stopped!");
        return;
      }
    }
  }
  // clear
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawRectangle(myRectangle, context);
  drawRoute(lines, context);
  drawPoints([redDest1, redDest2], context);
  drawPoints(points, context);
  // request new frame
  if(continueMoving1) {
    requestAnimFrame(function() {
      animate1(myRectangle, canvas, context);
    });
  }
}
function animate2(myRectangle, canvas, context) {
    var newX = myRectangle.x + 3;
    var newY = myRectangle.y + 3;
    var maxX = 100;
    var maxY = 165;
    if(newY < maxY) {
      myRectangle.y = newY;
    }
  // clear
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawRectangle(myRectangle, context);
  drawRoute(lines, context);
  drawPoints([redDest1, redDest2], context);
  drawPoints(points, context);
  // request new frame
  requestAnimFrame(function() {
    animate2(myRectangle, canvas, context);
  });
}

function startStop() {
  animate1(myRectangle, canvas, context);
}
function startStop2() {
  animate2(myRectangle, canvas, context);
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var redDest1 = {
  x: 250,
  y: 10,
  width: 25,
  height: 25,
  borderWidth: 2
};
var redDest2 = {
  x: 300,
  y: 165,
  width: 25,
  height: 25,
  borderWidth: 2
};

var myRectangle = {
  x: 300,
  y: 165,
  width: 25,
  height: 25,
  borderWidth: 2
};

var line1 = {
  x: 45,
  y: 155,
  width: 295,
  height: 1
};
var line2 = {
  x: 0,
  y: 200,
  width: 600,
  height: 1
};
var line3 = {
  x: 0,
  y: 0,
  width: 1,
  height: 200
};
var line4 = {
  x: 45,
  y: 45,
  width: 1,
  height: 110
};
var line5 = {
  x: 550,
  y: 45,
  width: 1,
  height: 110
};
var line6 = {
  x: 595,
  y: 0,
  width: 1,
  height: 200
};
var line7 = {
  x: 0,
  y: 0,
  width: 595,
  height: 1
};
var line8 = {
  x: 45,
  y: 45,
  width: 295,
  height: 1
};
var line9 = {
  x: 340,
  y: 45,
  width: 1,
  height: 110
};
var line10 = {
  x: 395,
  y: 45,
  width: 1,
  height: 110
};
var line11 = {
  x: 395,
  y: 155,
  width: 155,
  height: 1
};
var line12 = {
  x: 395,
  y: 45,
  width: 155,
  height: 1
};
var points = [{x: 25, y:175}, {x: 50, y:175}, {x: 75, y:175}, {x: 100, y:175}, {x: 125, y:175},
              {x: 150, y:175}, {x: 175, y:175}, {x: 200, y:175}, {x: 225, y:175}, {x: 250, y:175},
              {x: 275, y:175},{x: 300, y:175},{x: 325, y:175},{x: 350, y:175},{x: 375, y:175},
              {x: 400, y:175},{x: 425, y:175},{x: 450, y:175},{x: 475, y:175},{x: 500, y:175},
              {x: 525, y:175},{x: 550, y:175},{x: 575, y:175},
              {x: 25, y:150},{x: 25, y:125},{x: 25, y:100},
              {x: 575, y:150},{x: 575, y:125},{x: 575, y:100}, {x: 575, y:75},{x: 575, y:50},{x: 575, y:25},
              {x: 425, y:25},{x: 450, y:25},{x: 475, y:25}, {x: 500, y:25},{x: 525, y:25},{x: 550, y:25},
              {x: 275, y:25},{x: 300, y:25},{x: 325, y:25}, {x: 350, y:25},{x: 375, y:25},{x: 400, y:25}];
points = points.map(function(obj) {
  obj.width = 1;
  obj.height = 1;
  return obj;
});

var lines = [line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12];

drawRectangle(myRectangle, context);
drawRoute(lines, context);
drawPoints([redDest1, redDest2], context);
drawPoints(points, context);
// wait one second before starting animation
setTimeout(function() {
  var startTime = (new Date()).getTime();
  animate1(myRectangle, canvas, context);
}, 1000);
