class Walker {
  
  
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-3, -1), 0);
    this.acc = createVector(0, 0); 
    this.w = random(5, 8); 
    this.hue = random(360);
  }


  pull(target) {
    let force = p5.Vector.sub(target, this.pos);
    force.normalize();
    force.mult(gravity); 
    this.acc.add(force);
  }

  
  move() {
    this.vel.add(this.acc);
    this.vel.mult(0.997);
    this.pos.add(this.vel);
    this.acc.mult(0); 

    if (this.pos.x < 0) {
      this.pos.x = width;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }

  
  show() {
    fill(this.hue); 
    noStroke();
    circle(this.pos.x, this.pos.y, this.w);
  }
}