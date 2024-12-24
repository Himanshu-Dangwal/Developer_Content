"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = startLogger;
const index_1 = __importDefault(require("./index"));
function startLogger() {
    setInterval(() => {
        // console.log(chessGame)
        index_1.default.games.forEach(game => {
            console.log(`Game ID: ${game.id}`);
            console.log(`White Player: ${game.whitePlayerName}`);
            console.log(`Black Player: ${game.blackPlayerName}`);
            console.log(`Moves: ${game.moves.join(', ')}`);
        });
    }, 5000);
}
