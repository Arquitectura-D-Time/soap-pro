const express 	= require("express"); 
const app 	= express();
const answer = require('./src/expose')

app.use('/', answer.tuto);

var server = app.listen(3007, function () {
    console.log('Server is running..'); 
});
