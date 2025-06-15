// server.cjs
const jsonServer = require('json-server');
const path = require('path');

// Load your custom mock data from db.js
const db = require('./db.js');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/api', router); // All API routes start with /api

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`✅ JSON Server running at http://localhost:${PORT}/api/users`);
});
