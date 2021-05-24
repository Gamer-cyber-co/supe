var zenia;
var tourus;
var cyclap;
var parkslot1,parkslot2,parkslot3;
var stoper1,stoper2,stoper3;

function setup() {
  createCanvas(1536,721);
  parkslot1 = createSprite(760, 100, 1450, 150);
  parkslot2 = createSprite(760, 350, 1450, 150);
  parkslot3 = createSprite(760, 600, 1450, 150);
  
   //cars
  zenia = createSprite(100,350,40,30)
  zenia.shapeColor = "orange"
  tourus = createSprite(100,100,40,30)
  tourus.shapeColor = "orange"
  cyclap = createSprite(100,600,40,30)
  cyclap.shapeColor = "green"

  //stoper
stoper1 = createSprite(1400,100,20,148)
stoper1.shapeColor = "yellow"
stoper2 = createSprite(1400,350,20,148)
stoper2.shapeColor = "yellow"
stoper3 = createSprite(1400,600,20,148)
stoper3.shapeColor = "yellow"
}

function draw() {
  background("black");  
 //zenia moving
 if(keyDown("RIGHT_ARROW")){
zenia.x=zenia.x+5
 }
 
 if(keyDown("LEFT_ARROW")){
  zenia.x=zenia.x-5
 }

if(zenia.isTouching(stoper2)){
zenia.shapeColor = "red"
stoper2.shapeColor = "red"
zenia.x=0
}

else{zenia.shapeColor = "white"
  stoper2.shapeColor = "yellow"
}

  drawSprites();
}