class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
   // this.image = loadImage("sprites/wood1.png");
    this.visibility  = 255;

  }
  score(){
    if(this.visibility<0 && this.visibility >-150){
      score++;
    }
  }
display(){
  if(this.body.speed<5){
    super.display();
  }
  else{
    World.remove(world,this.body);
    this.visibility = this.visibility-5;
    push();
    tint(255,this.visibility)
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
pop();
  }
}
};
