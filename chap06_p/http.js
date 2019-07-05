const http = require('http');  // http 모듈을 가져온다.
const url = require('url');  // url 모듈을 가져온다.
const querystring = require('querystring'); // 쿼리 스트링 모듈을 가져온다.

var port = 3000;  // port 번호 지정
const server = http.createServer(); // http 모듈을 이용하여 server를 만든다.

server.listen(port, function () { // 서버를 시작한다.
   console.log('웹 서버 대기중... : %d', port);
});

server.on('connection', function (socket) {
   var addr = socket.address();
   console.log('클라이언트가 접속했습니다.');
});

server.on('close', function () {
   console.log('웹 서버 종료됨.');
});

server.on('request', function (req, res) { // 요청 이벤트일 때
   var urlp = url.parse(req.url, true);
   //console.log(urlp);
   var samplequery = "id=hong&password=1234";
   var query = querystring.parse(samplequery);
   console.log(query.id);
   console.log(query.password);

   if(urlp.pathname == '/login') {
       res.writeHead(200, {
           'Content-Type': 'text/html'
       })
       res.write(`<h2>Login page</h2>`);
       res.end();
   } else {
       res.writeHead(200, {
           'Content-Type': 'text/html'
       })
       res.write(`<h2>url.search : ${urlp.search}</h2>`);
       res.write(`<h2>url.pathname : ${urlp.pathname}</h2>`);
       res.write(`<h2>url.path : ${urlp.path}</h2>`);
       res.end();
   }
});
