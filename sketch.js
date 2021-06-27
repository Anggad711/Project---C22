var StarImg, fairyImg, bgImg;
var Fairy , Voice;
var star, starBody;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	StarImg = loadImage("star.png");
	
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	
	Background = loadImage("starNight.png");
	
	Voice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 600);

	Voice.play();
	Fairy = createSprite(300, 475);
	Fairy.addAnimation("Fairyflying",fairyImg);  
	   
	   Fairy.scale =0.2;


	star = createSprite(650,30);
	star.addImage(StarImg);
	star.scale = 0.25;

	 engine =Engine.create();
	    world =engine.world;

	starBody= Bodies.circle(650, 30, 5,  {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	Engine. run(engine);

}


function draw() 
{
	Engine.update(engine)

  background(Background);
  
  Fairy.velocityX=0
  Fairy.velocityY=0
 
  
  if (keyDown(RIGHT_ARROW)){
	  Fairy. velocityX=6
}else if (keyDown(LEFT_ARROW)){
	Fairy.velocityX=-6
}else if (keyDown(DOWN_ARROW)){
	star.velocityY=6
}

    if(star.y > 460){
	star. velocityY=0
    star.x =Fairy.x + 100
}
  drawSprites();
}



