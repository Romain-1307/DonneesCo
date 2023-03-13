var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

var data=[];

app.use(express.static('html'));

app.post("/annotation", cors(), function(req, res){
    var body = req.body;
    data.push(body);
    res.send("Votre commentaire a été sauvegardé !");
});

/*app.get("/toto", function(req, res){
    res.send("salut toto !");
});*/

app.listen(port, function(){
    console.log('serveur listening on port : '+port);
});

