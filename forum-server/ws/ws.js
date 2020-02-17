const WebSocket = require('ws');

const { pushDataToClient } = require('../db/db');

const wss = new WebSocket.Server({port: 3001});

wss.on('connection', async (ws) => {
    console.log('Client connected to ws');
    const data = await getThreadsAndComments();
    ws.send(data);
});

module.exports = wss;