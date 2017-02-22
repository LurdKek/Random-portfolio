

function setup() {
    createCanvas(900, 600);
    noCursor();
}

function draw() {
    background(235);
    noFill()
    strokeWeight(300);
    stroke(0, 200);
    rect(0,0, width, height);
    bubble.display();
    bubble.move();
    
  
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
        if(this.x >= 750 && this.x <= 900) {
            this.x = mouseX -300;
        } if(this.x <= 150 && this.x >= 0) {
          this.x = mouseX +300;  
        } if(this.y <= 150 && this.y >= 0) {
            this.y = mouseY +250;
        } if(this.y >= 450 && this.y <= 600) {
            this.y = mouseY -250; 
        }
    }
}
