var express = require('express'),
app = express()
port = process.env.PORT || 5000;

bodyParser = require('body-parser');
cors = require('cors')

const mysql = require('mysql')

var con = mysql.createConnection({
  host: "13.215.139.119",
  user: "rtd",
  password: "Tiny722$",
  database: "roadtotd"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

var routes = require('./api/routes');
routes(app); // registering the route

app.listen(port);

console.log('Users RESTful API server started on: ' + port);