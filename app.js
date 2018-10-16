// Business node.js code//
const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/*const express= require('express');
const app = express();
// only thing that is going to be different is the get post//
app.get('/', function(req, res) {
	res.send('Hello World')
});
// always the same //
app.listen(3000, function() {
	console.log('Listening at port 3000')
})
*/
/*let http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('request was made:' + req.url);
	res.writeHead(200, {'Context-type': 'text/html'});
	res.writeHead(200, {'Context-type': 'text/css'});
	res.writeHead(200, {'Context-type': 'text/script'});
	var myReadStream = fs.createReadStream(__dirname + './index.html', 'utf8');
	myReadStream.pipe(res);
})
server.listen(3000, function() {
	console.log('Listening at Port 3000')
});
*/
/*
const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static('public'))

app.get('/', function(req, res) {
	resp.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000); function() {
	console.log('Listening at Port 3000')
});*/