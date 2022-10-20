function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    textSize(32);
    textAlign(CENTER);
    text('Simple Synth', windowWidth/2, 30);
}