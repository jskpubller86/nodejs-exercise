const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
let userId;
let userName;
let pwd;
app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>')
});

app.get('/login', (req, res) => {
    fs.readFile('./login.html',(err,data) => {
        res.end(data);
    });
});

app.get('/register', (req, res) => {
    fs.readFile('./register.html',(err,data) => {
        res.end(data);
    });
});

app.post('/signup', (req,res) => {
    userId = req.body.userId;
    userName  = req.body.userName;
    pwd = req.body.pwd;
    res.send(req.body)
});

app.post('/signin', (req,res) => {
    console.log(userId);
    console.log(pwd);
    console.log(req.body);
    
    
    if(userId == req.body.userId && pwd == req.body.pwd){
        res.send('<h2>로그인에 성공했습니다.</h2>');
    }else{
        res.send('<h2>로그인에 실패했습니다.</h2>');
    }
});

app.listen(port, ()=>{
    console.log('server listening...' + port);
});