
const http = require('http');
const fs= require('fs');
const path=require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  //res.end('2016320270 \n');

const indexContent=fs.readFileSync(path.join(__dirname,'index.html'));
res.end(indexContent);
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});