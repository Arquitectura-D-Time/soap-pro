/*jslint node: true */
"use strict";

const express 	= require("express"); 
var xml = require('xml');
//const answer = require('./src/expose')
var soap = require('soap');
const consume = require('./consume');
var fs = require('fs');
var xml = fs.readFileSync('tutorias.wsdl', 'utf8');
var app 	= express();
var fetch = require("node-fetch");
var port = 3007;

// app.use('/', answer.tuto);

// funcion que divide el json
function splitter_function(args) {
    console.log('splitter_function');
    var splitter = args.splitter;
    var splitted_msg = args.message.split(splitter);
    var result = [];
    for(var i=0; i<splitted_msg.length; i++){
      result.push(splitted_msg[i]);
    }
    return {
        result: result
        }
}

function getTutoriasById(args){
    var id = args.id;
    var response;
    console.log('Muestra la tutoria del id ' + id);
    return fetch("http://146.148.107.218:5002/tutorias/"+id).then(res => res.json())
    .then(data => {
      console.log(data);
      response = data;
      return {
        id: data.id,
        materia:data.materia,
        descripcion:data.descripcion,
        cupos:data.cupos,
        idtutor:data.idtutor,
        idtoken:data.idtoken
        }
  })
}

function getTutoriasByMateria(args){
  var materia = args.materia;
  var event = [];
  console.log('Muestra tutorias de la materia ' + materia);    
  return fetch("http://146.148.107.218:5002/materia/"+materia).then(res => res.json())
  .then(data => {
    console.log(data);
    var event = [];
    for(var i = 0; i < data.length; i++){
      event.push( {
        id: data[i].id,
        materia:data[i].materia,
        descripcion:data[i].descripcion,
        cupos:data[i].cupos,
        idtutor:data[i].idtutor,
        idtoken:data[i].idtoken
        });
      }
      return event;
  });
}

// servicio
var serviceObject = {
    MessageSplitterService: {
          MessageSplitterServiceSoapPort: {
              MessageSplitter: splitter_function,
              TutoriaByID: getTutoriasById,
              TutoriaByMateria: getTutoriasByMateria
          },
          MessageSplitterServiceSoap12Port: {
              MessageSplitter: splitter_function,
              TutoriaByID: getTutoriasById,
              TutoriaByMateria: getTutoriasByMateria
          }
    }
  };

app.get('/', function (req, res) {
  res.send('Bienvenido SOAP-Tutorias');
})

app.get('/eventos',(req,res)=>{
  res.json(consume.answer);
  
})

app.listen(port, function () {
  var wsdl_path = "/wsdl";
  soap.listen(app, wsdl_path, serviceObject, xml);
  console.log("WSDL en http://146.148.107.218:" + port + wsdl_path +"?wsdl");
});
