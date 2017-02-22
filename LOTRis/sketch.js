

function setup() {
    createCanvas(1100, 1100)
}

function draw() {
    background(25)
    
    fill(45, 167, 200)
    rect(300,300,500,500)
    fill(70)
    beginShape();
        vertex(314, 100);
        vertex(270, 175);
        vertex(230, 215);
        vertex(254, 230);
        vertex(244, 280);
        vertex(118, 310);
        vertex(118, 320);
        vertex(240, 320);
        vertex(240, 400);
        vertex(176, 450);
        vertex(176, 460);
        vertex(340, 480);
        vertex(360, 600);
        vertex(500, 600);
        vertex(575, 600);
        vertex(585, 500);
        vertex(595, 485);
        vertex(620, 460);
        vertex(655, 400);
        vertex(675, 350);
        vertex(680, 200);
        vertex(660, 150);
        vertex(630, 100);
        vertex(550, 50);
        vertex(450, 30);
        vertex(375, 50);
        vertex(660, 150);
        vertex(630, 100);
        vertex(550, 50);
        vertex(450, 30);
        vertex(375, 50);
    
    endShape(CLOSE)
       
    fill(99, 50, 90)
    ellipse(256, 238, 60, 60)
    
    fill(50, 250, 0)
    beginShape();
        vertex(228, 215);
        vertex(680, 350);
        
    endShape(CLOSE)
 console.log(mouseY);

    
}