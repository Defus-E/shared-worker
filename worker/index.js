const worker = new SharedWorker("worker.js", "Test worker");

const first = document.querySelector("#number1");
const second = document.querySelector("#number2");
const result = document.querySelector(".result");

first.onkeyup = () => {
  worker.port.postMessage([first.value, second.value]);
}

second.onkeyup = () => {
  worker.port.postMessage([first.value, second.value]);
}

worker.port.onmessage = (e) => {
  result.textContent = e.data;
}
