const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 81 });

wss.on('connection', function connection(ws) {
    console.log('index.js -->onConnection:');

    ws.on('message', function incoming(message) {
        // Handle incoming message
        console.log('index.js -->Type of received data is: ', typeof(message));
        ws.send(`Message from websocket server: ${message}, thank you!!`);

        // Broadcast the message to all clients
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send("" + message);
            }
        });
    });

    ws.on('close', function () {
        // Handle connection close
        console.log('index.js -->inClose:');
    });
});
