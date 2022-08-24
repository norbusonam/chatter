const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const dotenv = require('dotenv');
const registerRoutes = require('./config/routes');
const setupSockets = require('./config/sockets');
const connectDb = require('./config/db');

// load env variables
dotenv.config();

// server and socket setup
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    // TODO: make this an enviornment variable
    origin: ['http://localhost:3000']
  }
});

registerRoutes(app);
setupSockets(io);
connectDb()

// TODO: make port an enviornment variable
server.listen(3001, () => {
    console.log('Server is listening on port 3001');
});