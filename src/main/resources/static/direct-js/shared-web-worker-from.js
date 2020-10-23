var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result1 = document.querySelector('.result1');


var myWorker = new SharedWorker('/direct-js/shared-worker.js');
myWorker.port.start();

first.onchange = function() {
    myWorker.port.postMessage(['Compute', first.value,second.value]);
    console.log('Message posted to worker: ' + first.value);
}

second.onchange = function() {
    myWorker.port.postMessage(['Compute', first.value,second.value]);
    console.log('Message posted to worker: ' + second.value);
}

myWorker.port.onmessage = function(e) {
    result1.textContent = e.data;
    console.log('Message received from worker: ' + e.data);
}


