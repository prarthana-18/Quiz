class Contestant{
    constructor(){
  this.index=null;
  this.distance=0;
  this.name=null;
    }
    getCount(){
        var data1=database.ref("contestantCount").on("value",function(data){
         contestantCount=data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            contestantCount:count
        })
    }
    update(){
        var contestantindex="contestants/contestant"+this.index
        database.ref(contestantindex).set({
            name:this.name,
            distance:this.distance
        })
    }
     static getContestantinfo(){
        var Contestantinfo=database.ref("contestant").on("value",function(data){
            allContestant=data.val()
        })

        
    }
}