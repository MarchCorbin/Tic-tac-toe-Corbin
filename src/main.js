var gameBoard = document.querySelector('.game-board')
var player1 = new Player('O')
var player2 = new Player('X')
var freshGame = new Game(player1, player2)
var player1Board = document.querySelector('.player1-boards')
var player2Board = document.querySelector('.player2-boards')

gameBoard.addEventListener('click',function(){
drawBoard()
getID()
// drawPlayerBoards()
});


function drawBoard(){
  for (var i = 0; i < freshGame.board.length; i++) {
    for (var j = 0; j < freshGame.board[i].length; j++) {
      var gotYou = document.querySelector(`#m${i}-${j}`).innerText = `${freshGame.board[i][j]}`
      if(freshGame.board[i][j] == ''){
        freshGame.board[i][j].innerText = ''
      } else {
        gotYou.innerHTML = `<p>${freshGame.board[i][j]}</p>`
        }
      }
    }
  }

// drawPlayerBoards(){

// }







function getID(){
  var slotId = event.target.id
   slotId = slotId.slice(1,4)
   var splitId = slotId.split('-')
   freshGame.takeTurn(splitId[0],splitId[1])
   drawBoard()
   // drawPlayerBoards(splitId[0],splitId[1])
}
