//canvas size variable (scX & csY)
//csX = window.innerWidth;
//csY = window.innerHeight;

csX = 1100;
csY = 900;


function setup() {
    createCanvas(csX, csY);
    //noCursor();
}

function draw() {
  
    background(235);
    
    //Text
    textSize(25);
    noStroke();
    fill(0, 125);
    text("Don't drag me out of the Light", 390, 350);
    
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
        if(this.x >= csX -270) {
            this.x = map(mouseX, csX-270, csX, csX-270, csX-450);
        } else if(this.x <= csX-830) {
          this.x = map(mouseX, csX-830, csX-1100, csX-830, csX-650);  
        } if(this.y <= csY-630) {
            this.y = map(mouseY, csY-630, csY-900, csY-630, csY-450);
        } if(this.y >= csY-270) {
            this.y = map(mouseY, csY-270, csY, csY-270, csY-450); 
        }
    }
}
