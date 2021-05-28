class Drops {
  constructor(x, y) {

      var options ={
          restitution:0.4
      }
    
      this.body = Bodies.circle(x, y,5,options); 
      this.drops = loadImage("download.png")      
      World.add(world, this.body);

  }
  display() {

      var pos = this.body.position;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      noStroke();
      fill(this.color)
      ellipseMode(RADIUS);
      pop();
  }

};