const express = require('express')
const app = express();
const port = 3000
var path = require("path");

var fs = require('fs');


// Handle static files
app.use('/static',express.static('public'));
app.use(express.static('node_modules'));




app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
