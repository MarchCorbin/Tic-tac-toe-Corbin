var gameBoard = document.querySelector('.game-board')
var slot = document.querySelector('.col')
// var freshGame = new Game()
var gameDataPlayer1 = []
var gameDataPlayer2 = []

gameBoard.addEventListener('click',function(){
    takeTurn()
    turnFlipper()
});

function takeTurn(){
  var slots = document.querySelectorAll('.col')
  var slotid = event.target.id
  for (var i = 0; i < slots.length; i++) {
  if(slots[i].id === slotid && gameBoard.classList.contains('active') && !event.target.innerText){
    var moves = event.target.innerText = 'X'
  gameDataPlayer2.push(slotid)
    winnerCheck()
  } else if(!gameBoard.classList.contains('active') && slots[i].id === slotid && !event.target.innerText) {
    var moves = event.target.innerText = 'O'
    gameDataPlayer1.push(slotid)
    winnerCheck()

  }
}
}

function winnerCheck(){
  var winningCombo =[
     ['col1','col2','col3'],
     ['col1','col3','col2'],
     ['col2','col1','col3'],
     ['col2','col3','col1'],
     ['col3','col2','col1'],
     ['col3','col1','col2'],

     ['col4','col5','col6'],
     ['col4','col6','col5'],
     ['col5','col4','col6'],
     ['col5','col6','col4'],
     ['col6','col5','col4'],
     ['col6','col4','col5'],

     ['col7','col8','col9'],
     ['col7','col9','col8'],
     ['col8','col7','col9'],
     ['col8','col9','col7'],
     ['col9','col7','col8'],
     ['col9','col8','col7'],

     ['col1','col4','col7'],
     ['col1','col7','col4'],
     ['col4','col7','col1'],
     ['col4','col1','col7'],
     ['col7','col4','col1'],
     ['col7','col1','col4'],

     ['col2','col5','col8'],
     ['col2','col8','col5'],
     ['col5','col2','col8'],
     ['col5','col8','col2'],
     ['col8','col5','col2'],
     ['col8','col2','col5'],

     ['col3','col6','col9'],
     ['col3','col9','col6'],
     ['col6','col3','col9'],
     ['col6','col9','col3'],
     ['col9','col3','col6'],
     ['col9','col6','col3'],

     ['col1','col5','col9'],
     ['col1','col9','col5'],
     ['col5','col1','col9'],
     ['col5','col9','col1'],
     ['col9','col1','col5'],
     ['col9','col5','col1'],

     ['col3','col5','col7'],
     ['col3','col7','col5'],
     ['col5','col3','col7'],
     ['col5','col7','col3'],
     ['col7','col5','col3'],
     ['col7','col3','col5']
]
for (var i = 0; i < winningCombo.length; i++) {
console.log(winningCombo[i],'winningComboi');
console.log(gameDataPlayer1, 'player1');
  if(gameDataPlayer1 == winningCombo[i] || gameDataPlayer2 == winningCombo[i]){
    console.log('we made it');
  }
  }
  return
  }




function checkValue(){
  if (gameDataPlayer1.length + gameDataPlayer2.length >= 9){
    }
  }



function turnFlipper(){
  gameBoard.classList.toggle('active')
}
