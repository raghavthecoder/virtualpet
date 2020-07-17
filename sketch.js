//Create variables here
var dog ,happyDog;
var database;
var foodS, foodStock;

function preload()
{
  dog=loadImage("images/dogImg.png");
  dog=loadImage("images/dogImg2.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}

text ("foodStock",150,150);
text("note press UP_ARROW TO FEED DRAGO MILK",200,200)
textSize(20);
Fill(black);
stroke(10);


drawSprites();
//add styles here

}

function changePosition(x,y){
  dog.x=dog.x+x;
  dog.y=dog.y+y;
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
 
if(x<=0){
  x=0;
}
else{
  x=x-1
}
  database.ref('/').update({
    Food:x
  })
}
