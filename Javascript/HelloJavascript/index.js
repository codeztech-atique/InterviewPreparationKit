const express = require('express');
const path = require('path');
const chalk = require('chalk');
const bodyparser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8002;
var app = express()


app.use(cors())
app.options('*', cors());

app.use(bodyparser.json({limit: '5mb', extended: true}))
app.use(bodyparser.urlencoded({limit: '5mb', extended: true}))


app.use("/",  express.static(__dirname + '/public/'));


app.get('/', function (req, res) {
  res.sendFile(path.resolve('public/index.html'))
})
 
// Server
app.listen(port, () => {
  console.log(chalk.blueBright("Server is listening port number:", port));
})