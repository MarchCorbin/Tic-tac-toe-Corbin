class Game {
  constructor(player1, player2){
    this.player1 = player1
    this.player2 = player2
    this.isActive = true
    this.activePlayer = this.player1
    this.winner = null
    this.isDraw = false
    this.board = [
      ['','',''],
      ['','',''],
      ['','','']
    ]
    this.winningRows = [
      [{row:0, col:0}, {row:0, col:1},{row:0, col:2}],
      [{row:1, col:0}, {row:1, col:1},{row:1, col:2}],
      [{row:2, col:0}, {row:2, col:1},{row:2, col:2}],

      [{row:0, col:0}, {row:1, col:0},{row:2, col:0}],
      [{row:0, col:1}, {row:1, col:1},{row:2, col:1}],
      [{row:0, col:2}, {row:1, col:2},{row:2, col:2}],

      [{row:0, col:0}, {row:1, col:1},{row:2, col:2}],
      [{row:0, col:2}, {row:1, col:1},{row:2, col:0}]
     ]
  }


  takeTurn(row, col) {
    if(this.board[row][col] == ""){
      this.board[row][col] = this.activePlayer.mark
      this.checkForWin()
      this.checkForDraw()
      this.toggleActivePlayer()
    } else {
      alert('Invalid Move, Pick Again')
    }
  }

  toggleActivePlayer(){
    if(this.activePlayer === this.player1){
      this.activePlayer = this.player2
    } else if(this.activePlayer === this.player2){
      this.activePlayer = this.player1
    }
  }

  checkForDraw(){
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board[i].length; j++) {
        if(this.board[i][j] == ''){
          return
        }
      }
    }
    if(this.checkForWin() == false){
      this.isDraw = true
      alert('This is a Cats Game!')
    }
  }

  checkForWin(){
    for (var i = 0; i < this.winningRows.length; i++) {
      var currentWinningRow = this.winningRows[i]
      var firstMark = currentWinningRow[0]
      var secondMark = currentWinningRow[1]
      var thirdMark = currentWinningRow[2]

      var firstMarkCheck = this.board[firstMark.row][firstMark.col]
      var secondMarkCheck = this.board[secondMark.row][secondMark.col]
      var thirdMarkCheck = this.board[thirdMark.row][thirdMark.col]
      if(firstMarkCheck !== '' && firstMarkCheck == secondMarkCheck && secondMarkCheck == thirdMarkCheck){
        this.isActive = false
        this.activePlayer.wins.unshift(this.board)
        this.winner = `${this.activePlayer.name}`
        this.activePlayer.assessTheWins()
        alert(`${this.winner} has Won!`)
        this.resetGame()
        return true
        }
      }
      return false
    }


  resetGame() {
      this.isActive = true
      this.board = [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    }
  }
