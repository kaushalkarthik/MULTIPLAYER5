
var database;
var gameState=0
var playerCount
var form,player,game
var allPlayers
var distance=0
var car1,car2,car3,car4
var cars
var car1img,car2img,car3img,car4img,trackimg
var finishedPlayers=0
var passedFinish=false

function preload(){
   trackimg=loadImage("images/track.jpg")
   car1img=loadImage("images/car1.png")
   car2img=loadImage("images/car2.png")
   car3img=loadImage("images/car3.png")
   car4img=loadImage("images/car4.png")
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database()
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4){
        game.update(1)
    }
   if(gameState===1){
      clear()
      game.play()
   }

   if(finishedPlayers===4){
    game.update(2)
   }
  

   if(gameState===2 && finishedPlayers===4){
       game.displayRanks()
   }
}
  



