class Player{
    constructor(){

        this.index=null
        this.distance=0
        this.name=null
        this.rank=0

    }
    getCount(){
        var playerCountRef=database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    update(){

        var playerIndex = "players/player"+ this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            rank:this.rank

        })
    }

    getfinishedPlayers(){
        var finishedPlayersref=database.ref("finishedPlayers")
        finishedPlayersref.on("value",(data)=>{
            finishedPlayers=data.val()
        })
    }

    static updatefinishedplayers(){
        database.ref("/").update({
            finishedPlayers:finishedPlayers+1
        })
        this.rank=this.rank+1
    }


 static getPlayerinfo(){
     var playerInforef=database.ref("players")
     playerInforef.on("value",(data)=>{
         allPlayers =data.val();

     })
     console.log(allPlayers);
 }

}
