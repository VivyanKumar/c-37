class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{     // anonymous functions
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        });
    }

    // players
            // player1
                    // name
                    // dustance
            // player


    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        });
    }

    static getPlayerInfo(){
        var playerinfoRef = database.ref('players');
        playerinfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}
