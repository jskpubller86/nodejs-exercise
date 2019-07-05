const express = require('express');
const rout = require('./rout');
const app = express(); // 생성
const port = 3000;

app.get('/', function (req,res) {
    console.log('/ 요청이 들어옴');
    res.send('<h1>Home page</h1>');
});

app.get('/about',(req,res) => {
    console.log('/about 요청이 들어옴');
    res.writeHead(200, {
       'Content-type': 'text/html'
    });
    res.write('<h2>url.search : </h2>');
    res.write('<h2>url.pathname : </h2>');
    res.write('<h2>url.path : </h2>');
    res.end();
});

app.get('/query',(req,res) => {
});

rout(app);

app.listen(port, function() {
    console.log('server listen at ...' + port);
});
 