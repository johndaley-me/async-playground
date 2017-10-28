/**
 * Shows basic usage of async/queue with async function
 */
const queue = require('async/queue');
const asyncify = require('async/asyncify');

console.log('Running happy.async.js');

function worker(task, callback) {
  console.log(`Task param: ${task}`);
  // this will be undefined
  console.log(`Callback param: ${callback}`);

  console.log('Worker is doing some work');
  // don't invoke callback since it's undefined
  // callback(null, 'Work is done!');
  return 'Work is done!';
  // Or
  // return Promise.resolve('Work is done!');
}

const q = queue(asyncify(worker), 1);

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










