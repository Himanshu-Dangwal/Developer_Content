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


/*

Singleton Pattern

interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    private static instance: GameManager; // Create a static instance of the class
    private games: Game[] = [];

    private constructor() {
        // Private constructor ensures that a new instance cannot be created from outside
    }

    public static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    }

    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }

    public logState() {
        console.log(this.games);
    }
}

*/