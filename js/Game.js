class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState: state,
        })
    }

    start(){
        if(gameState === 0){
            player=new Player();
            player.getCount()
            form=new Form()
            form.display();
        }
        car1=createSprite(100,200)
        car1.addImage(car1img)

        car2=createSprite(300,200)
        car2.addImage(car2img)

        car3=createSprite(500,200)
        car3.addImage(car3img)

        car4=createSprite(700,200)
        car4.addImage(car4img)

        cars=[car1,car2,car3,car4]
       
    
    }

    play(){

        form.hide()
        
        Player.getPlayerinfo()
        player.getfinishedPlayers()

        if(allPlayers !== undefined){
        background(rgb(198,135,103))
        image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index=0
        var x=175
        var y;
          
            //displayPosition=displayPosition+1
            for(var plr in allPlayers) //for in loop
            {
                index=index+1
                x=x+280
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(plr === "player" +player.index){
                    stroke(10)
                    fill("blue")
                    ellipse(x,y,60,60)
                cars[index-1].shapeColor="orange"
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y
                }
               
                
                
                textSize(15)
                textAlign(CENTER)
                text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+75)

            }
           
        }
        if(keyIsDown(UP_ARROW) && player.index!==null && passedFinish===false){
            player.distance=player.distance+50
            player.update()
        }
        if(player.distance>5100 && passedFinish===false){
            Player.updatefinishedplayers()
            player.rank=finishedPlayers
            player.update()
            passedFinish=true
            
        }
        drawSprites();

    }
    displayRanks(){
        Player.getPlayerinfo()
        textAlign(CENTER)
        textSize(50)
        console.log("displayRanks")
        for(var plr in allPlayers){
            if(allPlayers[plr].rank===1){
                text("firstRank:"+allPlayers[plr].name,650,150)

            }
            else  if(allPlayers[plr].rank===2){
                text("secondRank:"+allPlayers[plr].name,650,215)

            
            }
            else  if(allPlayers[plr].rank===3){
                text("thirdRank:"+allPlayers[plr].name,650,285)

           
            }
            else{
                text("fourthRank:"+allPlayers[plr].name,650,350)

            }

        }
    }
    
}