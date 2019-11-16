var express 	= require("express"); 
var app 	= express();

const tutorias = require('./getTutorias');

var tuto=tutorias.tutorias


module.exports = {
    tuto,
  }