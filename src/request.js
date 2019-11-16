// Carga de modulos necesarios y creación de nueva aplicacion.
var express 	= require("express"); 
var app 	= express();
var bodyParser 	= require('body-parser');
var request 	= require("request");
 
// URL con contenido JSON demostrativo.
var url 	= "https://jsonplaceholder.typicode.com/todos/"
 
// Soporte para bodies codificados en jsonsupport.
app.use(bodyParser.json());
// Soporte para bodies codificados
app.use(bodyParser.urlencoded({ extended: true })); 
 
// Ejemplo: GET http://localhost:8080/users
// Consumimos datos Facke de la URL: https://jsonplaceholder.typicode.com/todos
const users=app.get('/users', function(req, res) {
	request({
	    url: url,
	    json: false
	}, function (error, response, body) {
 
	    if (!error && response.statusCode === 200) {
	    	// Pintamos la respuesta JSON en navegador.
	        res.send(body) 
	    }
	})
});
 
//Ejemplo: GET http://localhost:8080/items/3
//app.get('/users/:id', function(req, res) {
 
//	var itemId = req.params.id;
 
//	request({
//	    url: url+itemId,
//	    json: false
//	}, function (error, response, body) {
 //
	//    if (!error && response.statusCode === 200) {
	  //  	// Pintamos la respuesta JSON en navegador.
	    //    res.send(body) 
	    //}
//	})
//})
 
module.exports = {
	users,
}
