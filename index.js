const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(5000, (req, res) => {
    console.log('listening on 5000');
})