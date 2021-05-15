class chain{
    constructor(bodyA, pointB){
        var o = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 200
        }

        this.pointB = pointB
        this.chain = Constraint.create(o);
        World.add(world, this.chain);
        
    }

    fly(){
        this.chain.bodyA = null;
    }

    attach(body){
        this.chain.bodyA = body;
    }

    display(){
        
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("white");
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop();
        }
    }
    
}