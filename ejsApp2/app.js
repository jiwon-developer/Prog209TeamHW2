var express = require('express');
var path = require('path');

//leaving in the bodyParser in case we ever send up form data and need to get data out of form
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// just one "site" with 2 pages, / and about

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});


// upLoadData page 
// sending a get with 1 param
// http://localhost:3000/uploadData?id=2
app.get('/uploadData', function(req, res) {
    let idVar = req.param('id');
    let msgVar = req.param('msg');
    // passing an object, used like a dictionary, to the render code
    res.render('pages/uploadData', { 
        value1PassedToRenderPage: idVar,
        value2PassedToRenderPage: msgVar
     });
  });



// error page 
app.get('/error', function(req, res) {
    // should get real data from some real operation, but instead ...
    let message = "some text from someplace";
    let errorObject ={
        status: "this is real bad",
        stack: "somebody called #$% somebody who called somebody <awful>"
    };
    res.render('pages/error', {  // pass the data to the page renderer
        message: message,
        error: errorObject
    });
});



// Movies page 
var mymovies = ["Dolemite","GoodBoys","LongShot", "Booksmart"]

app.get('/movies', function(req, res) {
   
    res.render('pages/movies',{
        movie1:"Dolemite is My Name",
        movie2:"Good Boys",
        movie3:"Long Shot",
        movie4:"Booksmart"

    });
});

// tvshow page 
var myTvShows = ["Friends","Money Heist","Bridgerton"]


app.get('/tvshows', function(req, res) {
   
    res.render('pages/tvshows',{
        tvShow1:"Black Mirror",
        tvShow2:"Money Heist",
        tvShow3:"Bridgerton",
        tvShow4:"Sweet Home"

    });
});




app.listen(3000);  // not setting port number in www.bin, simple to do here
console.log('3000 is the magic port');

module.exports = app;
