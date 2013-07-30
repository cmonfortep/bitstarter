var express = require('express');
var fs =require('fs');
var buffer = require('buffer');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
   var binaryString=fs.readFileSync('./index.html');
    var textString=binaryString.toString();
    response.send(textString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
