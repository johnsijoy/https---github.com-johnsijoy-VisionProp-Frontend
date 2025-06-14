const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // 👈 Serves the data in db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);               // Adds logging, CORS, etc.
server.use(jsonServer.bodyParser);     // Allows POST, PUT, DELETE requests
server.use(router);                    // Mounts API routes like /users

server.listen(3001, () => {
  console.log("JSON Server is running on port 3001");
});
