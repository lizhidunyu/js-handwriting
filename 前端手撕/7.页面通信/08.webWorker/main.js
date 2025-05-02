document.getElementById("startBtn").addEventListener("click", function () {
  const worker = new Worker("./worker.js");

  worker.onmessage = function (event) {
    console.log("Message received from worker:", event.data);
    alert("Calculation result: " + event.data);
  };

  worker.onerror = function (error) {
    console.error("Error from worker:", error.message);
  };

  worker.postMessage({ task: "calculate", data: 1000000 });
});
