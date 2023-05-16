const express = require('express');
const app = express();
const fs = require('fs');
const server = require('https').createServer({
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./cert.pem'),
}, app)

app.use(express.static('docs'));

server.listen(3000, () => {
    console.log(`Listening on port ${server.address().port}!`)
});