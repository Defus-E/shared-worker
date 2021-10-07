importScripts("https://cdn.socket.io/3.1.3/socket.io.min.js");

self.addEventListener("connect", async function (e) {
  const port = e.ports[0];
  const socket = io("http://127.0.0.1:3000/", {
    transports: ["websocket", "polling", "flashsocket"],
    reconnect: true,
  });

  port.postMessage("Worker has been stated.");

  socket.on("connect", function () {
    port.postMessage("Worker connected to the host.");
  });

  socket.on("disconnect", function () {
    port.postMessage("Worker disconnected from the host.");
  });

  socket.on("result", function(result) {
    port.postMessage(result);
  });

  port.addEventListener("message", function (e) {
    socket.emit("multiply", e.data);
  });

  port.start();
});
