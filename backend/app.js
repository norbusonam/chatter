const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
const registerRoutes = require('./config/routes');
const setupSockets = require('./config/sockets');
const connectDb = require('./config/db');

// load env variables
dotenv.config();

// server and socket setup
const app = express();
app.use(express.json());
app.use(cors({
  // TODO: make this an enviornment variable
  origin: [process.env.FRONTEND_URL]
}));
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    // TODO: make this an enviornment variable
    origin: [process.env.FRONTEND_URL]
  }
});

registerRoutes(app);
setupSockets(io);
connectDb()

const port = process.env.PORT || 3001
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});