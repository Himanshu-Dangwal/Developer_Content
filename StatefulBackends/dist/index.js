"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
(0, logger_1.startLogger)();
// setInterval(() => {
//     games.push({
//         id: Math.random().toString(),
//         whitePlayerName: "Himanshu",
//         blackPlayerName: "Blacky",
//         moves: []
//     })
// }, 5000)
const chessGame = new store_1.GameManager();
const newGameId = chessGame.addGame("Himanshu", "Shubham");
setTimeout(() => {
    console.log(newGameId);
    chessGame.addMove(newGameId, "E3F6");
}, 3000);
exports.default = chessGame;
/*
We need a sticky architecture to make sure the users are directed to the correct server and joined the correct room


Option 1 : We can have a routing service

?? Routing service is like a map, that stores which room is in which server.
So whenever a user tries to connect to a room, the map redirects the user to the correct service.

*/ 
