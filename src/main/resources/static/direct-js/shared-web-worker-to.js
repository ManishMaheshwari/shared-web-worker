var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result1 = document.querySelector('.result1');


var myWorker = new SharedWorker('/direct-js/shared-worker.js');
myWorker.port.start();

myWorker.port.postMessage(['Get']);

myWorker.port.onmessage = function(e) {
    console.log('Message received from worker: ' + e.data[2]);
    first.value = e.data[0];
    second.value = e.data[1];
    result1.textContent = e.data[2];
}