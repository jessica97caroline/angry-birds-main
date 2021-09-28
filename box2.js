class Tronco extends Base {
    constructor(x, y, height,angle) {
      super(x,y, 20, height,angle);
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body,angle);

    }}

      /*

      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill(255);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };*/