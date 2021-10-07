const http = require("http");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  res.end("Hello from server started by Electron app!");
});

server.listen(3000, () => {
  console.log("server has been started at port: 3000");
});

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("User connected: " + socket.id);

  socket.on("multiply", payload => {
    const res = _.reduce(payload, _.multiply);
    
    io.emit("result", res);
  })
});
