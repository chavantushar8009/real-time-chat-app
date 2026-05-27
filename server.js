const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log("Server running on port 8080");

wss.on('connection', (ws) => {

    console.log("Client connected");

    ws.on('message', (message) => {

        console.log("Received:", message.toString());

        wss.clients.forEach((client) => {

            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }

        });

    });

    ws.send("Connected Successfully");

});