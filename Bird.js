class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,70,70);
    //this.image = loadImage("sprites/bird.png");
    this.image = loadImage("bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //image(this.image,this.body.position.x,this.body.position.y,70,70)
    super.display();
  }
}