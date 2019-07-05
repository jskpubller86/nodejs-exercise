const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fileReader');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.send('<img src="images/images1.jpeg">');
});

app.get('/signin_form', (req, res)=>{
    res.send('<img src="images/images1.jpeg">');
});
app.get('/signin', (req, res)=>{
    res.send('<img src="images/images1.jpeg">');
});
app.get('/login_form', (req, res)=>{
    res.send('<img src="images/images1.jpeg">');
});

app.get('/login', (req, res)=>{
    res.send('<img src="images/images1.jpeg">');
});

app.listen(port, () => {
    
});
