let worker = new Worker("worker.js");

worker.onmessage = function(e) {
  console.log(e);
  if (e.data == "closed") {
    worker.terminate();
  }
};

worker.postMessage("hello");
worker.postMessage("close");
