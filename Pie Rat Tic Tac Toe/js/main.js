//Clears the getBox number assignments
for(i = 1; i <= 9; i = i + 1) {
  clearBox(i);
}
//Checking board array in the console
console.log(board);

//board stores player and pc move positions on the table as either "X" or "O"
var board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var turn;
//Web hosted images
var player = "<img src='http://i65.tinypic.com/2rq2jgh.jpg' />";	
var pirate = "<img src='http://i65.tinypic.com/6hnon6.jpg' />";

//Game Start designates that document.turn = player == player starts the game
function startGame() {
    
	turn = player;
    setMessage( player + " Can Start!")
  }
	function setMessage(msg) {
    document.getElementById("message").innerHTML = msg;
    }
	
	//nextMove function interacts with html onClick to place player image and call switchTurn function
	function nextMove(square) {
	    if (square.innerHTML == "") {
          square.innerHTML = turn;
		  console.log(turn);
        switchTurn();
		}
        else {
          setMessage("You can't move there!");
        }
    }
	
/*  Checks to see if its player or pirate's(pc's) turn
    if pc turn chooses random square in the html table make pc move
*/
	function switchTurn() {
        if (turn == player) {
          turn = pirate;
		 var aiMove = Math.floor(Math.random() * 9 + 1);
           
		
		   //pcMove = "s" + aiMove;
			//   console.log(pcMove);
		// console.log("s" + aiMove);
	   setTimeout(function(){
		  
          document.getElementById("s" + aiMove).innerHTML = pirate;
		  
		   board[aiMove -1] = "O"
		},1000);
		 console.log(board);
	
		   
		}
		  turn = player;
		    setMessage("It's " + turn + " turn");
	    
    }

	
	
	// retrieves the square number of player's onClick event
	function getBox(number) { 
        var result = $('#s'+number).html();
          return result;
           console.log(result);
    }

	//Clears the number stored in getBox
	function clearBox(number) {
  
        document.getElementById("s" + number).innerText = "";
  
	};
	
 