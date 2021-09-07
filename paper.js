class Paper {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 0.2,
    };
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
    this.image = loadImage("sprite/paper1.png");
  }
  display() {
    var pos = this.body.position;
    imageMode(RADIUS);
    fill("yellow");
    image(this.image, pos.x, pos.y, this.radius, this.radius);
  }
}
