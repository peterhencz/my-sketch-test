const canvasSketch = require("canvas-sketch");

const settings = {
  animate: true,
  duration: 3,
  dimensions: [600, 600],
  fps: 24,
};

function handler(e) {
  e = e || window.event;

  var pageX = e.pageX;
  var pageY = e.pageY;

  // IE 8
  if (pageX === undefined) {
    pageX =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    pageY =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  console.log(pageX, pageY);
}
if (document.attachEvent) document.attachEvent("mousemove", handler);
else document.addEventListener("mousemove", handler);
sketch = () => {
  return ({ context, width, height, playhead }) => {
    context.fillStyle = "pink";
    context.fillRect(0, 0, 300, 300);
  };
};

canvasSketch(sketch, settings);
