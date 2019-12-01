export class Model {
    games;
    constructor() {

        this.games = [
          new Game("5/7",false, "Entrem"),
          new Game("3/4",false, "."),
          new Game("6/6",true, "4x2"),
          new Game("2/6",false, "zZzzzZz")
        ]
    }
}

export class Game {
    players;
    isFull;
    name;

    constructor(players, isFull, name) {
        this.players = players;
        this.isFull = isFull;
        this.name = name;

    }
}
