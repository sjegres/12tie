var clickPressed = false;
var startPoint = {x: 0, y: 0};
var $donut = $('.donut');
var rotationObject = {
  x: 0,
  y: 0,
  z: 0
};

function mouseMoveHandler(e){
  if(e.clientX > startPoint.x){
    rotationObject.y = rotationObject.y >= 180 ? 180 : rotationObject.y+1;
  } else if(e.clientX < startPoint.x){
    rotationObject.y = rotationObject.y <= -180 ? -180 : rotationObject.y-1;
  }
  
  if(e.clientY > startPoint.y){
    rotationObject.x = rotationObject.x >= 180 ? 180 : rotationObject.x+1;
  } else if(e.clientY < startPoint.y){
    rotationObject.x = rotationObject.x <= -180 ? -180 : rotationObject.x-1;
  }
  
  startPoint.x = e.clientX;
  startPoint.y = e.clientY;
    
  $donut.css({
    'transform': 'rotateX('+rotationObject.x+'deg) rotateY('+rotationObject.y+'deg)'
  });
  
}

$(document).on('mousedown', function(e){
  clickPressed = true;
  startPoint.x = e.clientX;
  startPoint.y = e.clientY;

  $(document).on('mousemove', mouseMoveHandler);
});

$(document).on('mouseup', function(e){
  $(document).off('mousemove', mouseMoveHandler);
});