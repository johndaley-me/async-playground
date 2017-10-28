/**
 * Shows basic usage of async/queue with Node style callbacks
 * ff the worker needs to throw an error
 */
const queue = require('async/queue');

console.log('Running error.callback.js');

function worker(task, callback) {
  console.log(`Task param: ${task}`);
  console.log(`Callback param: ${callback}`);

  console.log('Worker is doing some work but something unexpected happened');
  callback(new Error('Worker encountered an error'), 'Extra info');
}

const q = queue(worker, 1);

// optional callback when all items are done
q.drain = function () {
  console.log('all items have been processed');
};

// callback function is optional here
q.push('task1 message', function (err, extra) {
  console.log('Finished processing task1');
  console.log(`Error: ${err}`);
  console.log(`Extra: ${extra}`);
});

// worker callback is still defined (check log message)
q.push('task2 message');










