const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();
/*
const sslPath = '/etc/letsencrypt/live/choe.io/';
const options = {
  key: fs.readFileSync(sslPath + 'privkey.pem'),
  cert: fs.readFileSync(sslPath + 'fullchain.pem')
}
function ensureSecure(req, res, next) {
  if (req.secure) {
    return next();
  }
  res.redirect('https://' + req.hostname + req.url);
}
*/

app.use(express.static(__dirname + '/client'));

app.get('/auth/github', function(req, res) {
  // console.log(req);
  console.log(req.query);
  return;
})

app.get('*', function(req, res) {
  return res.sendFile(__dirname + '/client/index.html');
});

// app.all('*', ensureSecure);
http.createServer(app).listen(1337);
// http.createServer(app).listen(80);
// https.createServer(options, app).listen(443);  
console.log('SERVER OPERATIONAL');
