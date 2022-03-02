const express = require('express');
const app = express()

app.set('views','./views');
app.set('view engine', 'ejs');

app.use('/public',express.static('public'));


app.get('/', function(req,res){
    res.render('index')
  
  })
  
app.get('/index1',function(req,res){
    res.render('index1')
  })
app.get('/index3',function(req,res){
    res.render('index3')
  })

  
app.listen(5000, 
    () => console.log("server listening on port 5000")
);