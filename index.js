const express = require('express')
const app = express()
const port = 3000
console.log("Helo");

console.log("Helo");

console.log("Helo");

console.log("Helo");

console.log("Helo");

app.get('/', (req, res) => res.send('Hello form Node.js Server'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
