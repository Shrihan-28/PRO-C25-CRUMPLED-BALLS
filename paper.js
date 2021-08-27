class Paper{

    constructor(x,y,radius,angle){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction:0.1,
            density: 1.2
        }
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.angle = angle;
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image,this.radius,this.radius);
        pop()


    }


    
}