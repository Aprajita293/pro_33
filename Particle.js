class Particle{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius/2,options);
        this.color=color(random(0,255),random(0,255),random(0,255))
        this.radius=radius
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
       push()
       translate (pos.x,pos.y)
       ellipseMode(CENTER)
       fill (this.color)
      ellipse(0,0,this.radius,this.radius);
        pop ()
    }

}
