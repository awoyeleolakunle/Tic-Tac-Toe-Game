
const play = document.querySelector('.play');
const exit = document.querySelector('.exit');
const playerTurn = document.querySelector('.playerTurn');
const boardIn1 = document.getElementById('grid1');
const boardIn2 = document.getElementById('grid2');
const boardIn3 = document.getElementById('grid3');
const boardIn4 = document.getElementById('grid4');
const boardIn5 = document.getElementById('grid5');
const boardIn6 = document.getElementById('grid6');
const boardIn7 = document.getElementById('grid7');
const boardIn8 = document.getElementById('grid8');
const boardIn9 = document.getElementById('grid9');

let columns = document.querySelectorAll("input");

columns.forEach(element => {
    element.disabled = "true";
});

var player1Symbol = "X";
var player2Symbol = "O" 
var currentPlayer = 1;


boardIn1.value ="";


    function adjustCurrentPlayer(){
        currentPlayer++;
        if(currentPlayer>2){
            currentPlayer=1;
        }
    }

        function boardInOne(){
         playAndExitState();
        if (currentPlayer==1 ){ boardIn1.value = player1Symbol
           boardIn1.disabled= true;
         playerTurnMessage();
           adjustCurrentPlayer()
        } else { boardIn1.value= player2Symbol;
            boardIn1.disabled = true;
          playerTurnMessage();
            adjustCurrentPlayer();}
      
    }

    function boardInTwo(){
        playAndExitState();
        if (currentPlayer==2 ){
            boardIn2.value = player2Symbol
           boardIn2.disabled= true;
           playerTurnMessage();
           adjustCurrentPlayer();
        } else {
            boardIn2.value= player1Symbol;
            boardIn2.disabled = true;
            playerTurnMessage();
            adjustCurrentPlayer()}      
    }

    function boardInThree(){
        playAndExitState();
        if(currentPlayer ==1) { boardIn3.value = player1Symbol;
            boardIn3.disabled = true;
            playerTurnMessage();
            adjustCurrentPlayer();}
        else{
            boardIn3.value = player2Symbol;
            boardIn3.disabled= true;
            playerTurnMessage();
            adjustCurrentPlayer();}
    }

    function boardInFour(){
        playAndExitState();
        if(currentPlayer ==1) { boardIn4.value = player1Symbol;
            boardIn4.disabled = true;
            playerTurnMessage();
            adjustCurrentPlayer();}
        else { boardIn4.value = player2Symbol;
            boardIn4.disabled= true;
            playerTurnMessage();
            adjustCurrentPlayer();}
    }

    function boardInFive(){
        playAndExitState();
        if(currentPlayer ==1) { boardIn5.value = player1Symbol;
            boardIn5.disabled = true;
            playerTurnMessage();
            adjustCurrentPlayer();}
        else { boardIn5.value = player2Symbol;
            boardIn5.disabled= true;
            playerTurnMessage();
            adjustCurrentPlayer();
        }
    }

    function boardInSix(){
        playAndExitState();
        if(currentPlayer ==1) { boardIn6.value = player1Symbol;
            boardIn6.disabled = true;
            playerTurnMessage();
            adjustCurrentPlayer();}
        else { boardIn6.value = player2Symbol;
            boardIn6.disabled= true;
            playerTurnMessage();
            adjustCurrentPlayer();}
    }

    function boardInSeven(){
        playAndExitState();
        if(currentPlayer ==1) {boardIn7.value = player1Symbol;
            boardIn7.disabled = true;
            playerTurnMessage();
            adjustCurrentPlayer();}
        else{
            boardIn7.value = player2Symbol;
            boardIn7.disabled= true;
            playerTurnMessage();
            adjustCurrentPlayer();}
    }

    function boardInEight(){
        playAndExitState();
        if(currentPlayer ==1) {boardIn8.value = player1Symbol;
            boardIn8.disabled = true;
            playerTurnMessage();
            adjustCurrentPlayer();}
        else{
            boardIn8.value = player2Symbol;
            boardIn8.disabled= true;
            playerTurnMessage();
            adjustCurrentPlayer();}
    }
    function boardInNine(){
        playAndExitState();
        if(currentPlayer ==1) {boardIn9.value = player1Symbol;
            boardIn9.disabled = true;
            playerTurnMessage();
            adjustCurrentPlayer();}
        else{
            boardIn9.value = player2Symbol;
            boardIn9.disabled= true;
            playerTurnMessage();
            adjustCurrentPlayer();
        }
    }

    function playAndExitState(){
        play.disabled = true;
         exit.disabled = false;
    }

    function playerTurnMessage(){
        if(currentPlayer ==1) {playerTurn.innerHTML = "player 2 it's your turn"}
        else{playerTurn.innerHTML="player 1 it's your turn"}
    }

    function gameOver(){
        play.disabled = true;
        exit.disabled = false;
    }  

play.addEventListener("click", ()=>{
    columns.forEach(element => {
        element.disabled = false;
        playerTurn.innerHTML = `player ${currentPlayer} it's your turn`;
    });
});

exit.addEventListener("click", ()=>{
        columns.forEach(element =>{
            element.disabled = "true";
            element.value = " ";
            play.disabled = false;
            playerTurn.innerHTML = "Press Play To Start The Game"
        });
});

function disableBoard(){
    columns.forEach(element => {
        element.disabled = "true";
        });
    }

function winningPositions(){
    if(boardIn1.value==player1Symbol && boardIn2.value==player1Symbol && boardIn3.value==player1Symbol
        || boardIn1.value==player2Symbol&&boardIn2.value==player2Symbol&&boardIn3.value==player2Symbol){
        adjustCurrentPlayer(); disableBoard();
        playerTurn.innerHTML = `Congratulations player ${currentPlayer} you won`; adjustCurrentPlayer(); } 

    if(boardIn4.value==player1Symbol && boardIn5.value==player1Symbol && boardIn6.value==player1Symbol
        || boardIn4.value==player2Symbol&&boardIn5.value==player2Symbol&&boardIn6.value==player2Symbol){
        adjustCurrentPlayer(); disableBoard();
        playerTurn.innerHTML = `Congratulations player ${currentPlayer} you won`; adjustCurrentPlayer();} 
    if(boardIn7.value==player1Symbol && boardIn8.value==player1Symbol && boardIn9.value==player1Symbol
        || boardIn7.value==player2Symbol&&boardIn8.value==player2Symbol&&boardIn9.value==player2Symbol){
        adjustCurrentPlayer(); disableBoard();
        playerTurn.innerHTML = `Congratulations player ${currentPlayer} you won`; adjustCurrentPlayer();}
        
    if(boardIn1.value==player1Symbol && boardIn4.value==player1Symbol && boardIn7.value==player1Symbol
        || boardIn1.value==player2Symbol&&boardIn4.value==player2Symbol&&boardIn7.value==player2Symbol){
        adjustCurrentPlayer(); disableBoard();
        playerTurn.innerHTML = `Congratulations player ${currentPlayer} you won`; adjustCurrentPlayer();} 
    if(boardIn2.value==player1Symbol && boardIn5.value==player1Symbol && boardIn8.value==player1Symbol
        || boardIn2.value==player2Symbol&&boardIn5.value==player2Symbol&&boardIn8.value==player2Symbol){
        adjustCurrentPlayer(); disableBoard();
        playerTurn.innerHTML = `Congratulations player ${currentPlayer} you won`; adjustCurrentPlayer();}
    if(boardIn3.value==player1Symbol && boardIn6.value==player1Symbol && boardIn9.value==player1Symbol
        || boardIn3.value==player2Symbol&&boardIn6.value==player2Symbol&&boardIn9.value==player2Symbol){
        adjustCurrentPlayer(); disableBoard();
        playerTurn.innerHTML = `Congratulations player ${currentPlayer} you won`; adjustCurrentPlayer();} 
    if(boardIn1.value==player1Symbol && boardIn5.value==player1Symbol && boardIn9.value==player1Symbol
        || boardIn1.value==player2Symbol&&boardIn5.value==player2Symbol&&boardIn9.value==player2Symbol){
        adjustCurrentPlayer(); disableBoard();
        playerTurn.innerHTML = `Congratulations player ${currentPlayer} you won`; adjustCurrentPlayer();}  
    if(boardIn3.value==player1Symbol && boardIn5.value==player1Symbol && boardIn7.value==player1Symbol
        || boardIn3.value==player2Symbol&&boardIn5.value==player2Symbol&&boardIn7.value==player2Symbol){
        adjustCurrentPlayer(); disableBoard();
        playerTurn.innerHTML = `Congratulations player ${currentPlayer} you won`; adjustCurrentPlayer();}             
    }

    function tiePosition(){
    if((boardIn1.value==player1Symbol||boardIn1.value==player2Symbol)&&(boardIn2.value==player1Symbol||boardIn2.value==player2Symbol)&&
    (boardIn3.value==player1Symbol||boardIn3.value==player2Symbol)&&(boardIn4.value==player1Symbol||boardIn4.value==player2Symbol)&&
    (boardIn5.value==player1Symbol||boardIn5.value==player2Symbol)&&(boardIn6.value==player1Symbol||boardIn6.value==player2Symbol)&&
    (boardIn7.value==player1Symbol||boardIn7.value==player2Symbol)&&(boardIn8.value==player1Symbol||boardIn8.value==player2Symbol)&&
    (boardIn9.value==player1Symbol||boardIn9.value== player2Symbol)){
        playerTurn.innerHTML = "Opps! It's a tie ..... Exit to start again";
        }
    }







  


