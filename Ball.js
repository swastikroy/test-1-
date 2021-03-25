class Ball{
    constructor(x,y,radius){
        var options = {
            'restitiution':0.7
            'friction':0.5
            'density':2.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(176, 219, 83);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}