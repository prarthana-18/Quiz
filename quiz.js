class Quiz{
  constructor  (){

  }
  getState(){
    var data1=database.ref("gameState").on("value",function(data){
     gameState=data.val()
    })
}  updateState(state){
    database.ref("/").update({
        gameState:state
    })
}
async start(){
    if (gameState===0){
        contestant=new Contestant();
        var contestantCountRef = await database.ref("contestantCount").once("value");
        if(contestantCountRef.exists()){
            contestantCount=contestantCountRef.val();
            contestant.getCount();
        }
        question=new Question();
        question.display();
    }

}
}