const express = require('express');
const app = express();
const PORT  = 3000;
app.get('/', function(req, res){
    res.send('hello world');
});

app.get('/movies', function(req, res){
    res.send('La listes des movies présente')
})

app.get('/movies/add', function(req, res){
    res.send('Le prochain formulaire ici')
})


app.listen(PORT, function(){
    console.log('Listining on port 3000');
})
app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Voici le paramètre choisi ${id}`);
})