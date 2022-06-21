function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);
  player1 = createSprite(50,height-100,30,30)
  pillow = createSprite(100,50,30,30)
  player2 = createSprite(300,60,30,30)
  player2.shapeColor = "red"
  player1.shapeColor= "black"
  pillow .shapeColor="white"
  //maze

  wall1 = createSprite(width/2,30,800,10)
  wall2 = createSprite(20,height/2,10,300)
 wall3 = createSprite(width/3,400,800,10)
 
 wall4 = createSprite(600,height/2,10,300)
 wall5 = createSprite(width/6,250,300,10)
 wall6 = createSprite(300,height/4,10,300)
 wall7= createSprite(700,height/2,10,300)







}

function draw() {
  background("yellow");  
  
  if(keyDown(UP_ARROW )&& player2.y>10){
    player2.y = player2.y-5
  }
  
  if(keyDown(DOWN_ARROW)){
    player2.y = player2.y+5
  }
  if(keyDown(LEFT_ARROW)){
    player2.x = player2.x-4
  }
  if(keyDown(RIGHT_ARROW)){
    player2.x = player2.x+4
  }
  if(player2.isTouching(pillow)){
   player1.destroy()
  }
  if(keyDown(UP_ARROW )&& player2.y>10){
    player2.y = player2.y-5
  }
  
 
  
  drawSprites();
}
//maze
//pillow
//points
//background