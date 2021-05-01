class Slingshot{
    constructor(bodyA,pointB){
        var options={
bodyA:bodyA,
pointB:pointB,
length:10,
stiffnes:0.4
        }
       this.pointB=pointB
        this.sling=Constriant.create(options)
        World.add(world,this.sling)
    }
    display(){
      
var pointA=this.sling.bodyA.position
var pointB=this.pointB
var a=pointA
var b = pointB
line(a.x,a.y,b.x,b.y)

    }

}