var fs = require('fs');

fs.open(__filename, "r", function (err, file) {
  console.log("IO!");
});

setTimeout(() => {
  console.log('setTimeout 0');
}, 0);

process.nextTick(function () {
  console.log("nextTick");
});

setImmediate(function () {
  console.log("immediate");
});