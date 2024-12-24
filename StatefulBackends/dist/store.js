"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addGame(player1, player2) {
        console.log("Creating a new Game");
        this.games.push({
            id: Math.random().toString(),
            whitePlayerName: player1,
            blackPlayerName: player2,
            moves: []
        });
        return this.games[this.games.length - 1].id;
    }
    addMove(currGameId, currMove) {
        console.log(`Adding move to game with Game Id ${currGameId}`);
        const currGame = this.games.find(game => game.id == currGameId);
        currGame === null || currGame === void 0 ? void 0 : currGame.moves.push(currMove);
    }
}
exports.GameManager = GameManager;
