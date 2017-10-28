/**
 * Shows basic usage of async/queue with Node style callbacks
 */
const queue = require('async/queue');

console.log('Running happy.callback.js');

function worker(task, callback) {
  console.log(`Task param: ${task}`);
  console.log(`Callback param: ${callback}`);

  console.log('Worker is doing some work');
  callback(null, 'Work is done!');
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










