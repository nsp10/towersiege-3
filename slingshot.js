class Slingshot{
    constructor(bodyA, anchor){
        var options = {
            bodyA: bodyA,
            pointB: anchor,
            stiffness: 0.004,
            length: 30,
            width:10
        }
      this.pointB = anchor;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA=body

    }

    fly(){
        this.sling.bodyA = null;

    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}