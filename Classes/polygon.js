class Polygon{

  constructor(x, y, r){

    var options = {
                  
    }

    this.body = Bodies.circle(50, 200, 50, options);
    this.width = width, this.height = height;
    World.add(world, this.body);
  }

  display(){

    var angle = this.body.angle;
    var pos = this.body.position;

    push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r);
    pop();
  }
}
