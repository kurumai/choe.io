const express = require('express');

const app = express();

app.use(express.static(__dirname + '/build'));

// app.get('*', (req, res) => {
// 	return res.sendFile(__dirname + '/build/index.html');
// });

console.log('listening on port 1337');
app.listen(1337);