// var http = require('http');
// var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function (req, res){
    res.sendFile(__dirname + '/home.html')
});

// app.get('/*',function (req, res){
//     res.sendFile(__dirname + '/promiseAdd.js')
// });

// app.get('/*',function (req, res){
//     res.sendFile(__dirname + '/app.css')
// });

app.listen(process.env.PORT||3000, process.env.IP);

// http.createServer(function(req, res){
//     fs.readFile('home.html', function(err , data){
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(process.env.PORT||3000, process.env.IP);