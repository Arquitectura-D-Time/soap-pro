const express 	= require("express"); 
const app 	= express();
const request = require('./src/request')

app.use('/', request.users);

var server = app.listen(3007, function () {
    console.log('Server is running..'); 
});
