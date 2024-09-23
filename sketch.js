function setup() {
    createCanvas(400, 400);
    background("red");
  }
  
  function draw() {
    
    stroke ("green");
    fill ("black");
    
    if (mouseIsPressed) {
      rect (mouseX,mouseY ,30 , 30);
      
      
    }
  }