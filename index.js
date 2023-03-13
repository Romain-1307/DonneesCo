var express = require('express');
var app = express();

app.get("/toto", function(req, res){
    res.send("salut toto !");
});

const port = 3000;
app.listen(port, function(){
    console.log('serveur listening on port : '+port);
});

