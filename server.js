var express = require('express');

//Create our app
var app = express();

//app.use() add funcitionlity to the express application
//express.static() specify folder name that we want to expose to the server
app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
