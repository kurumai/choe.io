const express = require('express');
const fs = require('fs');
const http = require('https');

const app = express();

const sslPath = '/etc/letsencrypt/live/choe.io/';
const options = {
	key: fs.readFileSync(sslPath + 'privkey.pem'),
	cert: fs.readFileSync(sslPath + 'fullchain.pem')
}

app.use(express.static(__dirname + '/client'));

app.get('*', function(req, res) {
  return res.sendFile(__dirname + '/client/index.html');
});

const server = http.createServer(options, app);  
console.log('listening on port 443');
server.listen(443);
