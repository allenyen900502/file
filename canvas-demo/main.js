var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');

autoSetCanvassize(yyy)
listenToMouse(yyy)


var eraserEnabled = false
eraser.onclick = function() {
  eraserEnabled =true
  actions.className = 'actions x'  
}
brush.onclick = function(){
  eraserEnabled = false
  actions.className = 'actions'
}

/******/ 
function autoSetCanvassize(canvas){
  setCanvasSize()
  window.onresize = function() {
  setCanvasSize() 
}


function setCanvasSize(){
  var pageWidth = document.documentElement.clientWidth
  var pageHeight = document.documentElement.clientHeight
  canvas.width = pageWidth
  canvas.height = pageHeight
}
}  
function drawcircle(x,y,radius){
  context.beginPath();
  context.fillstyle='balck';
  context.arc(x,y,radius,0,Math.PI*2);
  context.fill()
}
function drawline(x1,y1,x2,y2){
  context.beginPath();
  context.fillstyle='balck';
  context.moveTo(x1,y1);
  context.lineWidth=5;
  context.lineTo(x2,y2);
  context.stroke();
  context.closePath()
}
  
function listenToMouse(canvas){
  var using =false
  var lastpoint = {x: undefined,y: undefined};


canvas.onmousedown = function(aaa){  
  var x =aaa.clientX;
  var y =aaa.clientY; 
  using =true
  if(eraserEnabled){    
    context.clearRect(x-5,y-5,10,10)
  }else{    
    lastpoint ={"x":x,"y":y
    }    
  } 
}

canvas.onmousemove = function(aaa){
  var x =aaa.clientX
  var y =aaa.clientY
  
  if(!using) {return}
  
  if(eraserEnabled){    
    context.clearRect(x-5,y-5,10,10)
  }else{        
    var newpoint ={"x":x,"y":y
    }   
      drawline(lastpoint.x,lastpoint.y,newpoint.x,newpoint.y)
    lastpoint = newpoint
   } 
} 
  
canvas.onmouseup = function(aaa){
  using= false
}
}


