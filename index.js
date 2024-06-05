const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: 81 });


wss.on('connection', function connection(ws) {

    console.log('index.js -->Client connected');


    ws.on('message', function incoming(message) {

        console.log('index.js -->Received: %s', message);

        ws.send(`${message}`);
    });


    ws.on('close', function () {
        console.log('index.js -->Client disconnected');
    });
});
