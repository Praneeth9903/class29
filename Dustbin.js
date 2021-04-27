class Dustbin{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        
    rectMode(CENTER);
    fill ("aqua");
    
    image(this.image,0,0,this.width,this.height);
    pop();
    
    }
    }