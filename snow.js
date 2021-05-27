class Snow{
    constructor(x,y,radius){
       var options={
           friction:0.0000000000000000000000000000001,
           airFriction:1
       }
       this.body = Matter.Bodies.circle(x,y,radius, options);
       this.x=x;
       this.y=y;
       this.radius=radius;
       this.image = loadImage("assets/snow.png");
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var radius = this.body.radius;
        fill("BLUE");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 30,30);   
        if(this.body.position.y>800){ 
            Matter.Body.setPosition(this.body, {x:random(0,1000),y: random(0,650)}); 
        }
    }
}