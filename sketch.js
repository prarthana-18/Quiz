var canvas;
var gameState;
var contestantCount,quiz,question;
var contestant;
var database;
var gameState=0;
function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(850,400);


  game=new Game();
  game.getState();
  game.start();

}


function draw(){
  background("pink");

  
}
