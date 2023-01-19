const fs = require('fs');
const request = require('request');
const input = process.argv.slice(2);

request(input[0], (error, response, body) => {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);

  //write file to second argument passed in command line (./index.html)
  fs.writeFile(input[1], body, err => {
    if (err) {
      console.log(err);
    }
    //passes 'body' from request to download into index.html
    console.log(`Downloaded and saved ${body.length} bytes to ${input[1]}`);
  });
});

