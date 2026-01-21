const express = require('express');
const app = express();
const PORT  = 3000;
app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(PORT, function(){
    console.log('Listining on port 3000');
})