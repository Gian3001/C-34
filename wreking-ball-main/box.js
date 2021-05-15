class box{

    constructor(x,y,w,h){
        var o = {
            density:0.04,
            friction:1,
            restitution:0.8
        }

        this.body = Bodies.rectangle(x,y,w,h,o)
        this.w = w
        this.h = h
        World.add(world,this.body)

    }


    display(){
        var angle = this.body.angle    
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("yellow")
        rect(0,0,this.w,this.h)
        pop();

    }
}
