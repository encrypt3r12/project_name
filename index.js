const http = require('http');
const port = process.env.PORT || 3000;
var pg = require('pg');
const mongoose = require('mongoose');

const redis = require('redis');

try {
  console.log('Redis-cli started');
  const client = redis.createClient({ url: 'redis://:1plRieFaYB@10.99.46.173:6379' });
  client
    .connect()
    .then((res) => {
      console.log(res);
      client.set('manav', 'test');

    console.log('redis://:1plRieFaYB@10.99.46.173:6379');
      console.log('Redis-cli Successfully ended');
    })
    .catch((err) => {
      console.log('11Redis-cli Error occured');
      console.log(err);
    });
} catch (err) {
  console.log('Redis-cli Error occured');
  console.log(err);
}

try {
  console.log('Postgres started');
  var client = new pg.Client(process.env.DATABASE_URL);
  client
    .connect()
    .then((res) => {
      console.log(res);
      console.log('Postgres Successfully ended');
    })
    .catch((err) => {
      console.log('11Postgres Error occured');
      console.log(err);
    });
} catch (err) {
  console.log('Postgres Error occured');
  console.log(err);
}
try {
  console.log('Mongodb started');
  console.log(process.env.DATABASE_URL);
  mongoose
    .connect(process.env.DATABASE_URL)
    .then((res) => {
      console.log(res);
      console.log('MongoDB Successfully ended');
    })
    .catch((err) => {
      console.log('11Mongodb Error occured');
      console.log(err);
    });
} catch (err) {
  console.log('Mongodb Error occured');
  console.log(err);
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n';
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
