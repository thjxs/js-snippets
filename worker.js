self.addEventListener("message", function(e) {
  if (e.data == "close") {
    self.postMessage("closed");
  } else {
    handle(2000);
    self.postMessage("whoops");
  }
});

function handle(times) {
  let start = new Date();
  while (new Date() - start < times) {}
  return;
}
