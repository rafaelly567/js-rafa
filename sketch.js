function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(800);
  }function setup() {
    createCanvas(800, 800);
    background("white")
  }
  
  function draw() {
    stroke("pnk");
    fill("red");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 80, 35);
    }
  }
  