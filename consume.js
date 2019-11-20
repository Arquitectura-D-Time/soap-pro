const request = require('request');
var parseString = require('xml2js').parseString;
var convert = require('xml-js');
var LocalStorage = require('node-localstorage').LocalStorage;

var xmlBodyStr = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hs="http://www.holidaywebservice.com/HolidayService_v2/">
<soapenv:Body>
    <hs:EventsByTypeRequest>
       <hs:type>Concierto</hs:type>
    </hs:EventsByTypeRequest>
</soapenv:Body>
</soapenv:Envelope>`;

/*var answer=request.post(
  {url:'http://162.243.164.26:8000/wsdl?wsdl',
  body :xmlBodyStr ,
  headers: {'Content-Type': 'text/xml'}
  },
  function (error, response, body) {        
      if (!error && response.statusCode == 200) {
        parseString(body, function (err, result) {
          console.log(JSON.stringify(result));
          return JSON.stringify(result);
      });
      }
  }
);*/

var postRequest = {
  url: "http://162.243.164.26:8000/wsdl?wsdl",
  method:"POST",
  body: xmlBodyStr,
  headers:{
      //'Content-Type':'application/xml;charset=utf-8',
      'Content-Type': 'application/xml',
      'Accept-Encoding': 'gzip,deflate',
      'Content-Length': xmlBodyStr.length,
  }
 };
  
 let answer = (error, response, body) => {
  if (!error && response.statusCode == 200) {  
    console.log('\nEn xml:', body);

    parseString(body, function (err, result) {
      //console.log('\nresultado post: ',result);
      result = JSON.stringify(result);            

      var localStorage = new LocalStorage('./respuestas');      

      // con result muestra el json 
      // -> {"soap:Envelope":{"$":{"xmlns:soap":"http://sche...
      localStorage.setItem('resultado', (result));
      
      // con body muestra los resultados netos
      // -> 5dd35ae842b6527f3fc9a075asdasd2019-02-11asdasdasdasdConcierto
      //localStorage.setItem('resultado', (body));

      console.log('\nlocalstorage:', localStorage.getItem('resultado'))

    /*
    var xml2js = require('xml2js');
    var parser = new xml2js.Parser({explicitArray: false, trim: true});
    parser.parseString(body, (err, result) => {
      console.log('\nSin JSON result', result);
      result = JSON.stringify(result);
      var localStorage = new LocalStorage('./scratch');
      localStorage.setItem('resultado', JSON.stringify(result));
      console.log('\n con JSON result', result);
      console.log('\nlocalstorageguarda: ', localStorage.getItem("resultado"));
      //return result;
      */
    });
  };
  console.log('\nPostman:', response.statusCode, response.statusMessage);
 };
  
 request(postRequest, answer);

module.exports = {
  answer
}