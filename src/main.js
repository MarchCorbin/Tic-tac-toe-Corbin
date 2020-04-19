var gameBoard = document.querySelector('.game-board')
var player1 = new Player('O')
var player2 = new Player('X')
var freshGame = new Game(player1, player2)

gameBoard.addEventListener('click',function(){
getID()

});


function drawBoard(){
  for (var i = 0; i < freshGame.board.length; i++) {
    for (var j = 0; j < freshGame.board.length; j++) {
      freshGame.board[i][j]

    }
  }
}
function getID(){
  var slotId = event.target.id
   var splitId = slotId.split('-')
   freshGame.takeTurn(splitId[0],splitId[1])
}
