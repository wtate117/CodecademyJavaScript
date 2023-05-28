const team = {
  _players: [ 
    {firstname: 'John', lastname: 'Smith', age: 24},
    {firstname: 'David', lastname: 'Ham', age: 28},
    {firstname: 'Laura', lastname: 'Dot', age: 21}
  ],


  
  _games: [
    {opponent: 'Giants', teamPoints: 45, opponentPoints: 7}, 
    {opponent: 'Aints', teamPoints: 81, opponentPoints: 85}, 
    {opponent: 'Octopi', teamPoints: 62, opponentPoints: 107}
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  }, 

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {firstName: newFirstName, 
      lastName: newLastName, 
      age: newAge};
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {opponent: newOpponent, 
      teamPoints: newTeamPoints, 
      opponentPoints: newOpponentPoints};
    this._games.push(game);

    }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);

