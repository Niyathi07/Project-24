class Paper{

    constructor(x,y,radius){

        var options ={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
        }

        this.x = x
        this.y = y
        this.r = radius

        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);

        
    }

    display()
    {

        push ()
        translate(this.body.position.x , this.body.position.y)

        fill("pink");

        ellipseMode(RADIUS);
        ellipse(0, 0 , this.r , this.r);
        
        pop ()
        
    }
}