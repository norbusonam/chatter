const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

// server and socket setup
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    // TODO: make this an enviornment variable
    origin: ['http://localhost:3000']
  }
});

io.on('connection', (socket) => {

    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

});

// TODO: make port an enviornment variable
server.listen(3001, () => {
    console.log('Server is listening on port 3001');
});