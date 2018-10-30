var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode, '\n   Status Message: ', response.statusMessage, '\n    Content Type: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));
        console.log('Downloading image...');
        console.log('Download complete.');

/*

1. make a 'GET' request to 'https://sytantris.github.io/http-examples/future.jpg' using chaining. The chain should:
2. Use .on('error') to handle any errors
3. Use .on('response') to log the HTTPS response code, response message (response.statusMessage) and content type (response.headers['content-type'])
4. Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')

*/