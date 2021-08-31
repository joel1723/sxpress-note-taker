const path = require("path")
const express = require('express');
const app = express();
const db = require('./db/db.json');
const  fs  = require("fs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.get('/api/notes', (req, res) => {
 
  
 res.json(db);
})
  
app.post("/api/notes",(req,res)=>{

db.push(req.body)
fs.writeFile(__dirname+"/./db/db.json",JSON.stringify(db),err=>{
    if (err)throw err
})
res.end()
})
app.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/notes.html"))
})
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"))
})
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
  