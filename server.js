require('dotenv').config();

const
    express = require('express'),
    app = express(),
    axios = require('axios'),
    logger = require('morgan'),
    ejsLayouts = require('express-ejs-layouts'),


apiClient = axios.create();
app.use(logger('dev'));


//ejs config
app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/test', (req, res) => {
    // console.log("REQUEST RECEIVED, CONTACTING NASA...");
    const apiUrl ="https://api.chucknorris.io/jokes/random";
    apiClient({ method: "get", url: apiUrl }).then(data => {
        res.render('index', { chuckNorrisSaying: data.data.value })
    })
});

app.get('/other', (req, res) => {
    res.render('other')
})

app.get('/tender', (req, res) => {
    res.render('beezy')
})


app.listen(process.env.PORT, err => {
    console.log(err || `Server is listening on port ${process.env.PORT}`);
})