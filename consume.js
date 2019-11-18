const soapRequest = require('easy-soap-request');
const fs = require('fs');
const xmlToJson = require("xml-js");
const url='http://162.243.164.26:8000/wsdl?wsdl'

const headers = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'EventsByTypeRequest',
};

// usage of module
const createXml = () => {
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hs="http://www.holidaywebservice.com/HolidayService_v2/">
    <soapenv:Body>
        <hs:EventsByTypeRequest>
           <hs:type>Concierto</hs:type>
        </hs:EventsByTypeRequest>
    </soapenv:Body>
   </soapenv:Envelope>`
  }

function ans(){
    //const xml = createXml();
    //const { response } =  soapRequest(url, headers, xml);
    //const jsonBody = JSON.parse(xmlToJson.xml2json({response})) ;
    return "hola aun no puedo";
}
let answer=ans();



module.exports = {
    answer
  }