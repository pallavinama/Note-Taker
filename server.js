const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.get('/notes', function(req, res) {
    //res.send('hello notes');    
    res.sendFile(path.join(__dirname,'public/notes.html'));
});

app.get('/api/notes', function(req, res) {
    res.sendFile(path.join(__dirname,'db/db.json'));
});


app.post('/api/notes', function(req,res) {
    var newNote = req.body;
    
    fs.readFile(path.join(__dirname,"db/db.json"),'utf8',function(err,fileData){
        if(err){
            console.log("error reading file"+err);
        }
        const notes = JSON.parse(fileData);
        
        const id = notes.length+1;
        newNote.id = id;
        console.log("new note id "+newNote.id);
        notes.push(newNote);
        // reset the id's
        for (var i = 0; i < notes.length; i++) {
            notes[i].id = i+1;
        }
        res.json(newNote);
        fs.writeFile(path.join(__dirname,"db/db.json"),JSON.stringify(notes,null,2), function(err){
            if (err){
                throw err;
            }
        });
    });
});


app.listen(port, () => console.log("Example app listening at http://localhost:"+port));