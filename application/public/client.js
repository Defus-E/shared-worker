const socket = io("http://127.0.0.1:3000/", {
  transports: ["websocket", "polling", "flashsocket"],
  reconnect: true,
});

const first = document.querySelector("#number1");
const second = document.querySelector("#number2");
const result = document.querySelector(".result");

first.onkeyup = () => {
  socket.emit("multiply", [first.value, second.value])
}

second.onkeyup = () => {
  socket.emit("multiply", [first.value, second.value])
}

socket.on("result", (data) => {
  console.log(data);
  result.textContent = data;
});
