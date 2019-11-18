const request = require('request');
var parseString = require('xml2js').parseString;

var xmlBodyStr = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hs="http://www.holidaywebservice.com/HolidayService_v2/">
<soapenv:Body>
    <hs:EventsByTypeRequest>
       <hs:type>Concierto</hs:type>
    </hs:EventsByTypeRequest>
</soapenv:Body>
</soapenv:Envelope>`;

var answer=request.post(
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
);

module.exports = {
  answer
}