const
    express = require('express'),
    app = express(),
    axios = require('axios'),
    logger = require('morgan'),
    ejsLayouts = require('express-ejs-layouts'),
    PORT = 3000;


    apiClient = axios.create();
app.use(logger('dev'));



// ejs config
app.set('view engine', 'ejs');
app.use(ejsLayouts);

// app.get('/', (req, res) => {
//     // console.log("REQUEST RECEIVED, CONTACTING NASA...");
//     const apiUrl ="https://jsonplaceholder.typicode.com/";
//     apiClient({ method: "get", url: apiUrl }).then(data => {
//         console.log(data.data)
//         res.render('index')
//         // , { jsonplaceholder: data.data.value })
//     })
// });

app.get('/posts', (req, res) => {
    console.log("DaTa IS Being Received");
    const apiUrl ="https://jsonplaceholder.typicode.com/posts";
    apiClient({ method: "get", url: apiUrl }).then(data => {
        // console.log(apiRes.data)
        
        res.render('posts', ({ posts: data.data}))
        // res.render('posts' ({ success: true, posts: posts}))
    })
});

app.get('/', (req, res) => {
    res.render('index')
})

// app.get('/post', (req, res) => {
//     res.render('posts')
// })


app.listen(PORT, err => {
    console.log(err || `Server is listening on port ${PORT}`);
})