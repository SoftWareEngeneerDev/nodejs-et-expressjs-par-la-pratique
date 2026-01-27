const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT  = 3000;


app.use('/public', express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function(req, res){
    // res.send('hello world');
    res.render('index');
});
let meilleursFilms = [];
app.get('/movies', function(req, res){
    // res.send('La listes des movies présente')
    const title = "Les meilleurs films Burkinabè des 20 dernières années";
    meilleursFilms = [
        {title: 'yaaba', annee : '1998'},
        {title: 'tilè', annee : '2000'},
        {title: 'razougou', annee : '1997'},
    ];
    res.render('movies', {title : title, films: meilleursFilms});
});

app.post('/movies', (req, res) =>{
    console.log('Le titre du film est :',req.body.titreFilme);
    console.log('L\'année de sorite est :',req.body.anneeFilme);
    const filmRec = {title:req.body.titreFilme, annee:req.body.anneeFilme};
    // meilleursFilms = [...meilleursFilms, filmRec];
    meilleursFilms.push(filmRec);
    
    console.log(meilleursFilms);
    res.sendStatus(201);
})

app.get('/movies-details', function(req, res){
    // res.send('La listes des movies présente')
    res.render('movies-details');
});

app.get('/movies/add', function(req, res){
    res.send('Le prochain formulaire ici')
})


app.listen(PORT, function(){
    console.log('Listining on port 3000');
});

app.get('/movies/:id/:title', (req, res) => {
    const id = req.params.id;
    const films_title = req.params.title;
    // const films_title = 'Facebook';
    // res.send(`Voici le paramètre choisi ${id}`);
    res.render('movies-details', {movieid: id, title: films_title});
});