var http = require('http');
var url = require('url');

var server = new http.Server();

server.listen(3000, '127.0.0.1');

server.on('request', function (req, res) {
  const parsedUrl = url.parse(req.url, true);

  res.setHeader('Cache-control', 'no-cache');
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(parsedUrl.query.message);
});

function sq(a) {
  return a * a;
}

console.log(sq(3));

console.log(process.argv);