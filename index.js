const express = require('express')
const app = express()
const port = 3000
console.log("Helo");

console.log("Helo");

console.log("He2lo");

console.log("Helo");

console.log("He1lo");

app.get('/', (req, res) => res.send('Hello form Node.js Server'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
