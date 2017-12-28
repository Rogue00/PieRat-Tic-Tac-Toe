//var player = "<img src='http://i65.tinypic.com/2rq2jgh.jpg' />";	
//var pirate = "<img src='http://i65.tinypic.com/6hnon6.jpg' />";
var player;
var pirate;
var gameOn = false;
var msg;
var msg1;
var msg2 = "Take Cover Men, They're Firing On Us!";
var msg3 = "Prepare To Be Boarded! Sabres And Pistols Mateys!";
var msg4 = "We've Got Em On The Run Lads! Stay After Em!";
var msg5 = "Not There Ye Swabby!";
var msg6 = "Ahoy Matey! Choose Your Path And Start The Game!";
var msg7 = "We've Won Captain! Saints Be Praised!";
var msg8 = "Arrgghh!  We're Done For Cap'n!"
var x = document.getElementById("sound1"); 
var y;
var xx;

var board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var board1 = [];
var aiMove;
var winner;
var gameWon;
var result;
var num;
var user;

function reset() {
  for(i = 0; i < board.length; i++) {
    document.getElementById(i).innerHTML= "";
    gameWon = false;
    num = "";
    board= ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    x.pause();
    
    document.getElementById("choose1").style.visibility = "visible";
  document.getElementById("choose2").style.visibility = "visible";
    document.getElementById("reset").style.visibility = "hidden";
  }
}

function choose1 () {
 player= "<img src='http://i65.tinypic.com/2rq2jgh.jpg' />";
   pirate= "<img src='http://i65.tinypic.com/6hnon6.jpg' />";
    y = document.getElementById("sound2"); 
    xx = document.getElementById("sound3"); 
   msg = "Pirates To The Starboard Captain! Choose A Space To Defend Cap'n!"
 msg1 = "Prime The Guns! All Hands To Stations! Choose A Move And Fire!";
   document.getElementById("choose1").style.visibility = "hidden";
  document.getElementById("choose2").style.visibility = "hidden";
  
  begin();
}
function choose2() {
  player= "<img src='http://i65.tinypic.com/6hnon6.jpg' />";
   pirate= "<img src='http://i65.tinypic.com/2rq2jgh.jpg' />";
  y = document.getElementById("sound3"); 
  xx = document.getElementById("sound2"); 
  msg = "Pirates To The Starboard Captain! Get Ready To Fight!"
 msg1 = "Prime The Guns! All Hands To Stations! Choose A Move And Fire!";
  document.getElementById("choose1").style.visibility = "hidden";
  document.getElementById("choose2").style.visibility = "hidden";
  
  begin();
}

function begin() {
  gameOn = true;
  startGame();
}

function hideAttack() {
  document.getElementById("attack").style.visibility = "hidden";
  switchTurn();
}

function startGame() {
  turn = player;
  document.getElementById("message").innerText = msg6;
   document.getElementById("attack").style.visibility = "hidden";
   document.getElementById("reset").style.visibility = "hidden";
}



function nextMove(square) {
  if(gameOn === true) {
  if(gameWon !== true) {
  if(square.innerHTML === "") {
  
  if(turn === player) {
    square.innerHTML = player;
    board[square.id]= "X";
    xx.pause();
    y.play();
         
document.getElementById("attack").style.visibility = "visible";
    setTimeout(hideAttack, 3000); 
      
  } 
     
 checkForWinner();
 
}

    
  } else {
    gameOver();
  }
  }   
}

function aiMove() {
  if(board[4] === "4") {
    num = 4; 
  } else if(board[0] === "0") {
    num = 0;
  }  else if(board[2] === "2") {
    num = 2;
  } else if(board[6] === "6") {
    num = 6;
  }else if(board[8] === "8") {
    num = 8;
  } else if(board[1] === "1") {
    num = 1;
  } else if(board[3] === 3) {
    num = 3;
  } else{
    num = 7;
  }
 document.getElementById(num).innerHTML= pirate;
    y.pause();
    xx.play();
    document.getElementById("attack").style.visibility = "visible";
    board[num] = "O";
  console.log(board);
    setTimeout(hideAttack, 3000); 
  
}



function switchTurn () {
 
  if(turn === player && gameWon !== true) {
    turn = pirate;
    document.getElementById("message").innerText = msg2;
   aiMove();
  } 
  else if(turn === pirate && gameWon !== true) {
    
   turn = player; 
    document.getElementById("message").innerText = msg1;
      
}
}



function checkForWinner(winCombo) {
  
 if(board[0]=== "X" && board[1]=== "X" && board[2]=== "X" ||
    board[3]=== "X" && board[4]=== "X" && board[5]=== "X" ||
    board[6]=== "X" && board[7]=== "X" && board[8]=== "X" ||
    board[0]=== "X" && board[3]=== "X" && board[6]=== "X" ||
    board[1]=== "X" && board[4]=== "X" && board[7]=== "X" ||
    board[2]=== "X" && board[5]=== "X" && board[8]=== "X" ||
    board[0]=== "X" && board[4]=== "X" && board[8]=== "X" ||
    board[2]=== "X" && board[4]=== "X" && board[6]=== "X" ) {
      gameWon= true;
       winner= "X";
         
} else if
    (board[0]=== "O" && board[1]=== "O" && board[2]=== "O" ||
     board[3]=== "O" && board[4]=== "O" && board[5]=== "O" ||
     board[6]=== "O" && board[7]=== "O" && board[8]=== "O" ||
     board[0]=== "O" && board[3]=== "O" && board[6]=== "O" ||
     board[1]=== "O" && board[4]=== "O" && board[7]=== "O" ||
     board[2]=== "O" && board[5]=== "O" && board[8]=== "O" ||
     board[0]=== "O" && board[4]=== "O" && board[8]=== "O" ||
     board[2]=== "O" && board[4]=== "O" && board[6]=== "O" ) {
      gameWon= true;
       winner= "O";
       

  } 
 if(gameWon === true) {
   setTimeout(gameOver, 3000);
   //gameOver();
 }
  console.log(winner);
  console.log(gameWon);
}

function gameOver() {
  if(winner === "X") {
    document.getElementById("message").innerText = msg7;
    document.getElementById("reset").style.visibility = "visible";
    y.pause();
    x.play();
  } else if(winner === "O") {
    document.getElementById("message").innerText = msg8;
  document.getElementById("reset").style.visibility = "visible";  document.getElementById("attack").style.visibility = "visible";
  }
  gameOn = false;
}