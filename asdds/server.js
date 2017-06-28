var express = require('express');
var app = express();
const parser = require('body-parser');
const jsonParser = parser.json();
var path = require('path')
const cors = require('cors');


app.use(cors())
app.use(express.static(path.join(__dirname, '/target/nectar/web')));
app.set('views','./')


var port = 9999;


app.get("/", jsonParser, function (req, res) {

  var assets_name = req.query.assets_name;
  res.render('preview_template.ejs', {
      assets_name : assets_name
   
  });
console.log(assets_name)

});

app.listen(port);