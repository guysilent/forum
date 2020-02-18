const bodyParser = require('body-parser');
const express = require('express');
const path = require ('path');

const userRoutes = require('./routes/users');
const threadRoutes = require('./routes/thread');
const commentRoutes = require('./routes/comments');

const { getThreadsAndComments } = require('./db/db');
const {wss} = require('./ws/ws');

let app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'forum-client')));

app.use('/api/Users', userRoutes);
app.use('/api/Thread', threadRoutes);
app.use('/api/Comment', commentRoutes);

wss.on('connection', async (ws) => {
    console.log('Client connected to ws');
    const data = await getThreadsAndComments();
    ws.send(JSON.stringify(data));
});

app.listen(3000);
console.log('App listening on port 3000');