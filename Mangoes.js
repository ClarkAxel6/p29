class Mangoes{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0.0,
            friction: 1,
          }
          this.mango = loadImage('mangoes/mango.png');
          this.body = Bodies.circle(x, y, 50, options);
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
        image(this.mango, 0, 0, this.radius, this.radius);
        pop();
    }
}