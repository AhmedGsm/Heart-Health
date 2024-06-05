const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 81 });

wss.on('connection', function connection(ws) {
  console.log('node.js -->onConnection:');

  ws.on('message', function incoming(message) {
    // Handle incoming message
        console.log('node.js -->onMessage: %s', message);
  });

  ws.on('close', function() {
    // Handle connection close
        console.log('node.js -->inClose:');
  });
});