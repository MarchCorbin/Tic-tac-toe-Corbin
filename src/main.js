var gameBoard = document.querySelector('.game-board')
var player1 = new Player('O', 'player1')
var player2 = new Player('X', 'player2')
var freshGame = new Game(player1, player2)
var player1Board = document.querySelector('.player1-boards')
var player2Board = document.querySelector('.player2-boards')
var player1Score = document.querySelector('.player1-score')
var player2Score = document.querySelector('.player2-score')
var whoseTurn = document.querySelector('.whose-turn')
gameBoard.addEventListener('click',function() {
  getID()
  drawBoard()
});
window.onload = function() {
  startUp(player1)
  startUp(player2)
}

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

function drawPlayerBoards(takeThem) {
  var toHere;
  var player;
  var scores
    if (takeThem === 'player1'){
      toHere = player1Board
      player = player1
      scores = player1Score
    } else if (takeThem === 'player2') {
      toHere = player2Board
      player = player2
      scores = player2Score
    }
      var playerWins = player.retrieveWins()
      var scoreNum = parseInt(scores.innerText)
      if (!scores.innerText){
        scores.innerText = '0'
      } else {
        scores.innerText = scoreNum + 1;
      }
    if (playerWins.length && toHere){
      var slotValue = playerWins[0];
      var playerBoards = `
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
    toHere.insertAdjacentHTML('afterBegin', playerBoards)
  }
}

function startUp(player){
  var boardGames;
  var toHere
  var scores;
  if (player.name === 'player2') {
    toHere = player2Board
    boardGames = player2.retrieveWins()
    scores = player2Score
  } else {
    toHere = player1Board
    boardGames = player1.retrieveWins()
    scores = player1Score
  }
  for(var i = 0; i < boardGames.length; i++) {
    scores.innerText = boardGames.length
    slotValue = boardGames[i]
    var playerBoards = `
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
    toHere.insertAdjacentHTML('afterBegin', playerBoards)
  }
}

function checkWin() {
  if(freshGame.winner !== null) {
    var takeThem = freshGame.winner
    drawPlayerBoards(takeThem)
    freshGame.winner = null
  }
}

function getID() {
   var slotId = event.target.id
   slotId = slotId.slice(1,4)
   var splitId = slotId.split('-')
   freshGame.takeTurn(splitId[0],splitId[1])
   checkWin()
   whoseTurn.innerText = freshGame.activePlayer.name
}
