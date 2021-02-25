class Polygon{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
            this.pos=this.body.position;
            push();
            translate(this.pos.x,this.pos.y)
            ellipseMode(CENTER);
            ellipse(0,0,40,40);
            pop();
    }
}