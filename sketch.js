function setup() {
    createCanvas(1000, 1000);
    background ("white")
  }
  
  function draw() {
    rect(0,0,100,100)
    fill("pink")
    stroke("purple")
    
    if(mouseIsPressed) {
      rect(mouseX,mouseY,10,10)}}
