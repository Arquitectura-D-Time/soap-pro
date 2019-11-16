// Carga de modulos necesarios y creación de nueva aplicacion.
var express 	= require("express"); 
var app 	= express();
var bodyParser 	= require('body-parser');
var request 	= require("request");
 
// URL con contenido JSON demostrativo.
var url 	= "http://35.202.129.233:5002/tutorias"
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
 

var tutorias=app.get('/tutorias', function(req, res) {
	request({
	    url: url,
	    json: false
	}, function (error, response, body) {
 
	    if (!error && response.statusCode === 200) {
	        res.send(body) 
	    }
	})
});


module.exports = {
    tutorias,
  }