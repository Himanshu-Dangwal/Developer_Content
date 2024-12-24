import chessGame from "./index"

export function startLogger() {
    setInterval(() => {
        // console.log(chessGame)
        chessGame.games.forEach(game => {
            console.log(`Game ID: ${game.id}`);
            console.log(`White Player: ${game.whitePlayerName}`);
            console.log(`Black Player: ${game.blackPlayerName}`);
            console.log(`Moves: ${game.moves.join(', ')}`);
        });
    }, 5000)
}


