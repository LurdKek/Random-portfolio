//canvas size variable (scX & csY)
//csX = window.innerWidth;
//csY = window.innerHeight;

csX = 1100;
csY = 900;


function setup() {
    createCanvas(csX, csY);
    noCursor();
}

function draw() {
  
    background(235);
    
    //Text
    textSize(25);
    noStroke();
    fill(50);
    text("Don't drag me out of the Light", 950, 750);
    
    //Frame
    noFill();
    strokeWeight(500);
    stroke(0, 255);
    rect(0,0, width, height);
    
    //funct. objects
    bubble.display();
    bubble.move(); 
    
    //if(mouseX = )

}

var bubble = {
    x: 0,
    y: 0,
    display: function(){
        stroke(25);
        strokeWeight(6);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    },
   
    move: function(){
        this.x = mouseX;
        this.y = mouseY;
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
        if(this.x >= csX -250) {
            this.x = csX -550;
        } else if(this.x <= csX -850) {
          this.x = csX -550;  
        } if(this.y <= 250) {
            this.y = csY -450;
        } if(this.y >= 650) {
            this.y = csY -450; 
        }
    }
}
