const express = require('express')
const app = express()
const port = 3000
console.log("Helo");

console.log("He1lo");

console.log("HeA1DSF2s2311lo");

console.log("111Hesad1sfsa11lo");

console.log("Hae1lo");

app.get('/', (req, res) => res.send('Hello form Node.js Server'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
