/**
 * Shows that with usage of async/queue with Node style callbacks that
 * the worker function MUST invoke the callback
 */
const queue = require('async/queue');

console.log('Running infinite.callback.js');

function worker(task, callback) {
  console.log(`Task param: ${task}`);
  console.log(`Callback param: ${callback}`);

  console.log('Worker is doing some work');
  // callback();
  console.log('Oops forgot to call callback. This is the last message you will see.');
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
// this one never gets processed
q.push('task2 message');










