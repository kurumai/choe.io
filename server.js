const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client'));

app.get('*', (req, res) => {
	return res.sendFile('index.html');
});

console.log('listening on port 1337');
app.listen(1337);
