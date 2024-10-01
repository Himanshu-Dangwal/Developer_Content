const express = require('express');
const WebSocket = require('ws');

const app = express();
const httpServer = app.listen(8080, () => {
    console.log("Connected to server on port 8080");
});

const wss = new WebSocket.Server({ server: httpServer });
let count = 1;

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });

    ws.send('Hello! Message From Server!!');
    console.log(`Connected with user ${count}`);
    count++;
});
