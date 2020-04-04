const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.get('/notes', function(req, res) {
    //res.send('hello notes');    
    res.sendFile(path.join(__dirname,'public/notes.html'));
});



app.listen(port, () => console.log("Example app listening at http://localhost:"+port));