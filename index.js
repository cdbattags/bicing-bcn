var request = require('request');

request('http://wservice.viabicing.cat/v2/stations', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  body = JSON.parse(body);

  for(count = 0; count < 10; count++){
     console.log(body.stations[count]);
  }
});
