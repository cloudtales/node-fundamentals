const fs = require('fs'); // CommonJS module system (Not ES module system (import/export))
const server = require('http').createServer();

server.on('request', (req, res) => {
  /* 
  // Solution 1 (node has to load the entire file into memory) - Not recommended in production
  fs.readFile("./test-file.txt", (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });*/
  /*

  
  // Solution 2: Streams (Still a problem: backpressure)
  const readable = fs.createReadStream('./test-file.txt');
  readable.on('data', chunk => {
    res.write(chunk);
  });
  readable.on('end', () => {
    res.end();
  });
  readable.on('error', error => {
    console.log('File not found');
    res.statusCode = 500;
    res.end('File not found.');
  });*/

  // Solution 3 (pipe handles backpressure (target stream not fast enouhg))
  const readable = fs.createReadStream('./test-file.txt');
  readable.pipe(res);
  //readableSource.pipe(writeableDest)
});
//console.log(module);

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...');
});
