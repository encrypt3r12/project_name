const http = require('http');
const port = process.env.PORT || 3000;

const redis = require('redis');
const client = redis.createClient({ url: process.env.DATABASE_URL });
client.connect().then((res) => {
  client.set('manav', 'test');
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
