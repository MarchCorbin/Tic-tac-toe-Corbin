class Player {
  constructor(mark, name) {
    this.mark = mark
    this.wins = []
    this.name = name
  }

storeTheWins(){
  if(this.wins.length) {
var gameToStore = this.wins
var stringifyGame = JSON.stringify(gameToStore)
localStorage.setItem(`${freshGame.activePlayer.name}`, stringifyGame)
    }
  }
  retrieveWins(){
var stringed = localStorage.getItem(`${freshGame.activePlayer.name}`)
var parsedGame = JSON.parse(stringed)
return parsedGame
  }

  assessTheWins(){
    if(this.wins.length >= 0){
      this.storeTheWins()
  }  if(this.wins.length > 1)
      this.retrieveWins()
  }
}
