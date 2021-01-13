class Stone{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 1.0,
            friction: 3,
            density: 3.0
          }
          this.stone = loadImage('mangoes/stone.png');
          this.body = Bodies.circle(x,y,50, options);
          this.radius = 50;
          World.add(world, this.body); 
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        angleMode(RADIANS);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(3);
        fill('red');
        //rect(0, 0, this.width, this.height);
        image(this.stone, 0, 0, this.radius, this.radius);
        pop();
    }
}