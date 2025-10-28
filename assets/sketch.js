let walkers = []; 
let particles = 30; 
let gravity = 0.05;
let isPlaying = false;


function preload() {
  soundFormats('mp3');
  mySound = loadSound('assets/space.mp3')
}
 

function setup() {
  createCanvas(700, 400); 
  colorMode(HSB, 360, 100, 100);
  
  for (let i = 0; i<particles; i++) { 
    walkers.push(new Walker(random(width-50, width), random(height)));
  }
}


function draw() {
  background(10, 10); 
  
  let center = createVector(mouseX, mouseY); 
  
  for (let walker of walkers) {
    walker.pull(center); 
    walker.move();
    walker.show();
  }
}


function keyTyped() {
  if (key === ' ') { 
    if (isPlaying) {
      mySound.stop(); 
      isPlaying = false;
    } else {
      mySound.loop(); 
      isPlaying = true;
    }
    return false; 
  }
}