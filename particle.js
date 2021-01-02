class Particle {
    constructor(x,y) {
      var options = {
          restitution:0.4
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius=10;
      this.color=color(random(0,255),random(0,255),random(0,255));

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };