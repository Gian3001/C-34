class ball{

    constructor(x,y,r){
        var o = {
            density:1,
            frictionAir:0.005
        }

        this.body = Bodies.circle(x,y,r/2,o)
        this.r = r
        World.add(world,this.body)

    }


    display(){
        var angle = this.body.angle    
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(CENTER)
        fill("blue")
        ellipse(0,0,this.r,this.r)
        pop();

    }
}