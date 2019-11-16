const express 	= require("express"); 
const app 	= express();
const request = require('./src/getTutorias')

app.use('/', request.tutorias);

var server = app.listen(3007, function () {
    console.log('Server is running..'); 
});
