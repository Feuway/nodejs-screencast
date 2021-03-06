var fs = require('fs');

// fs.ReadStream наследует от stream.Readable
var stream = new fs.ReadStream(__filename, {
  encoding: 'UTF-8'
});

stream.on('readable', function () {
  var data = stream.read();
  console.log(data);
});

stream.on('end', function () {
  console.log("THE END");
});