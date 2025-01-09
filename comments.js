// Create web server
// Create a web server that listens to the port 3000 and returns a response with the following JSON object when the route /comments is accessed: {"name": "John Doe", "comment": "Hello World!"}.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ name: 'John Doe', comment: 'Hello World!' }));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

