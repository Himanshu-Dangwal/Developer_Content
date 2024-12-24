interface Game {
    id: string,
    whitePlayerName: string,
    blackPlayerName: string,
    moves: string[]
}

export class GameManager {
    games: Game[] = [];

    constructor() {
        this.games = []
    }

    addGame(player1: string, player2: string) {
        console.log("Creating a new Game")
        this.games.push({
            id: Math.random().toString(),
            whitePlayerName: player1,
            blackPlayerName: player2,
            moves: []
        })

        return this.games[this.games.length - 1].id;
    }

    addMove(currGameId: string, currMove: string) {
        console.log(`Adding move to game with Game Id ${currGameId}`)
        const currGame = this.games.find(game => game.id == currGameId);
        currGame?.moves.push(currMove);
    }
}