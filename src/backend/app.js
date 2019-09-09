    
const express = require('express')
const shows = require('./shows')
const app = express()
const port = 3001

app.get('/rest/shows', (req, res) => res.send(shows));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static(path.join(__dirname, '<../../build>')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '<../../build>', 'index.html'));
});

