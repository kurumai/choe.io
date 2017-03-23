const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client'));

app.get('*', function(req, res) {
  return res.sendFile(__dirname + '/client/index.html');
});

console.log('listening on port 80');
app.listen(80);
