function setup() {
    createCanvas(900, 600);
    
}

function draw() {
    background(220);
    bubble.display();
    bubble.move();
    
  
}

var bubble = {
    x: mouseX,
    y: mouseY,
    display: function(){
        stroke(25);
        strokeWeight(6);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    },
    move: function(){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
        if(this.y >= width) {
            this.x = this.x + random(-1, 1);
            this.y = this.y + random(-1, 1);
        }
    }
        
}