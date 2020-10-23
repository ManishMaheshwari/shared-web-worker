var a;
var b;
var result;


inProgress = false;

onconnect = function(e) {

    console.log("Worker connected: " + e.ports[0]);
    var port = e.ports[0];

    port.onmessage = function(e) {
        console.log("Worker has this STORED result: " + result);
        if(e.data[0] == 'Get'){

            //Blocking call for results.
            sleepFor(10000, !inProgress);

            console.log("Getting result:");
            port.postMessage([a, b, result]);
            console.log("Getting result: " + result);
            return;
        }

        if(e.data[0] == 'Compute'){
            
            inProgress = true;
            a = e.data[1];
            b = e.data[2];
            console.log("Worker recd compute message: " + a + " * " + b);

            //5 sec latency XHR call.
            var url = "http://localhost:8080/multiply";
            var path = "/5000/" + a + "/" + b;
            var http = new XMLHttpRequest();

            http.open("GET", url+path, true);
            http.onreadystatechange = function()
            {
                if(http.readyState == 4 && http.status == 200) {

                    var workerResult = 'Product: ' + http.responseText;
                    port.postMessage(workerResult);
                    result = workerResult;

                    console.log("Worker responded with result: " + workerResult);
                    inProgress = false;
                    return;
                }
            }
            http.send(null);

        }
    }



}

function sleepFor( sleepDuration, varwatch ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){
        if(varwatch){
            break;
        }
    }
}