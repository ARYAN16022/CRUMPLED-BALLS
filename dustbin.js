class Dustbin {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprite/db.png");
  }
  display() {
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, 850, 550, this.width, this.height);
  }
}
