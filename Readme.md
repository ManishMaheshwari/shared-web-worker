Quick POC for Shared Web Workers.
Shared Web Worker gets killed the moment there are zero open tabs for the domain.


1. Run `ServerApplication.java` from IDE
2. Open <http://localhost:8080/shared-web-worker-page-1.html> and <http://localhost:8080/shared-web-worker-page-2.html> in separate tabs in the browser
3. Inspect Shared Web Workers - chrome://inspect/#workers . Click inspect for shared-worker.js, open console panel.
4. Enter numbers in Page 1, and tab out. The numbers XHR'ed by the shared web worker. Server has a latency of 5 sec on this call.
5. Inspect various console logs.
5. Meantime, refresh the page 2 in other tab, which will listen for results from shared web worker. The result should update in page 2 running in a different tab.

6. Try the same again, but this time use navigation links from Page 1 -> Page 2. Still works if there was a page open in other tab that can been the shared web worker alive.
7. Now close all tabs except Page 1. Try the same again, and user the page navigation links. Fails. The shared web worker instance is killed as soon as there were zero tabs for the domain (which happened during page navigation).

https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker
