//bubble
var bubble = {
    x: 400,
    y: 300,
    display: function(){
        stroke(25);
        strokeWeight(6);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    },
    move: function(){
        this.x = this.x + random(-1, 3);
        this.y = this.y + random(-5, 7);
        if(this.y >= width) {
            this.x = this.x + random(-6, -1);
            this.y = this.y + random(-6, -1);
        }
    }
        
}

function setup() {
    createCanvas(800, 800)
    
    var km = milesToKm(26.3);
   // println(km);
}

function milesToKm(miles) {
    var km = miles * 1.6
    return km;
    }

function draw() {
    background(204)
    
    var x = 0;
    while (x <= width) {
        fill(0, 150, 200);
        ellipse (x, 100, 25, 25);
        x = x + 50;
    }
    
    for (var x = 0; x <= width; x = x + 50) {
        fill (50, 50, 100);
        ellipse (x, 700, 25, 25);
    }
    
    bubble.display();
    bubble.move();
    
    
    

    
 console.log(mouseY);

    
}