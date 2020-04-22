var gameBoard = document.querySelector('.game-board')
var player1 = new Player('X', 'player1')
var player2 = new Player('O', 'player2')
var freshGame = new Game(player1, player2)
var player1Board = document.querySelector('.player1-boards')
var player2Board = document.querySelector('.player2-boards')

gameBoard.addEventListener('click',function(){
drawBoard()
getID()
drawPlayerBoards()
});
var player1Stored = []
var player2Stored = []
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
//
function drawPlayerBoards(){
  if(freshGame.winner === 'player1'){
    player1Stored = []
    reinstate()
for (var i = 0; i < player1Stored.length; i++) {
      var slotValue = player1Stored[i]
    var player1Boards = `
      <section class='small-tictac-board'>
      <article class="srow1">
      <div class="scol col1" id='p0-0'>${slotValue[0][0]}</div>
      <div class="scol col2" id='p0-1'>${slotValue[0][1]}</div>
      <div class="scol col3" id='p0-2'>${slotValue[0][2]}</div>
    </article>
    <article class="srow2">
      <div class="scol col4" id='p1-0'>${slotValue[1][0]}</div>
      <div class="scol col5" id='p1-1'>${slotValue[1][1]}</div>
      <div class="scol col6" id='p1-2'>${slotValue[1][2]}</div>
    </article>
    <article class="srow3">
      <div class="scol col7" id='p2-0'>${slotValue[2][0]}</div>
      <div class="scol col8" id='p2-1'>${slotValue[2][1]}</div>
      <div class="scol col9" id='p2-2'>${slotValue[2][2]}</div>
    </article>
    </section>`
    player1Board.insertAdjacentHTML('afterBegin', player1Boards)
  }
} else if (freshGame.winner === 'player2'){
  player2Stored = []
  reinstate()
  for (var i = 0; i < player2Stored.length; i++) {
        var slotValue = player2Stored[i]
      var player2Boards = `
        <section class='small-tictac-board'>
        <article class="srow1">
        <div class="scol col1" id='p0-0'>${slotValue[0][0]}</div>
        <div class="scol col2" id='p0-1'>${slotValue[0][1]}</div>
        <div class="scol col3" id='p0-2'>${slotValue[0][2]}</div>
      </article>
      <article class="srow2">
        <div class="scol col4" id='p1-0'>${slotValue[1][0]}</div>
        <div class="scol col5" id='p1-1'>${slotValue[1][1]}</div>
        <div class="scol col6" id='p1-2'>${slotValue[1][2]}</div>
      </article>
      <article class="srow3">
        <div class="scol col7" id='p2-0'>${slotValue[2][0]}</div>
        <div class="scol col8" id='p2-1'>${slotValue[2][1]}</div>
        <div class="scol col9" id='p2-2'>${slotValue[2][2]}</div>
      </article>
      </section>`
      player2Board.insertAdjacentHTML('afterBegin', player2Boards)
}
}
}
// loop through savedGames twice when nested target the section where we want the board to go on the corresponding side of the board using insertAdjacentHTML.



// }
function reinstate(){
  if(freshGame.winner === 'player1'){
  var savedGames = player1.retrieveWins()
  var storeTheBoard = savedGames[0]
  player1Stored.push(storeTheBoard)

} else if(freshGame.winner === 'player2'){
  var savedGames = player2.retrieveWins()
  var storeTheBoard = savedGames[0]
  player2Stored.push(storeTheBoard)

}
}






function getID(){
  var slotId = event.target.id
   slotId = slotId.slice(1,4)
   var splitId = slotId.split('-')
   freshGame.takeTurn(splitId[0],splitId[1])
   drawBoard()
   // drawPlayerBoards(splitId[0],splitId[1])
}
