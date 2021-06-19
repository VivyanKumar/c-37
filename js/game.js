class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{     // anonymous functions
            gameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
            gameState : state
        });
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200,30,50);
        car2 = createSprite(300,200,30,50);
        car3 = createSprite(500,200,30,50);
        car4 = createSprite(700,200,30,50);
        cars = [car1,car2,car3,car4];
    }
    play(){
        form.hide();
        textSize(48);
        text("Game Start",600,350);
        Player.getPlayerInfo();
        

        if(allPlayers !==undefined){

            var index=0;
            var x=0;
            var y=0;

            for(var plr in allPlayers){ // allPlayers[player1].name
                console.log("forloop");
                index+=1; // cars[index-1]
                x += 200;
                y= displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index===player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
                else{
                    cars[index-1].shapeColor= "black";
                }
                
                // textSize(20);
                // text(allPlayers[plr].name + " : "+ allPlayers[plr].distance,100,disp_pos);
             }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
        drawSprites();
    }
}