    
const express = require('express');
const getShows = require('./shows');
const app = express();
const port = 3001;
const path = require('path');


app.get('/rest/shows', (req, res) => res.send(getShows()));
app.use(express.static(path.join(__dirname, '../../build')));


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//app.get("*", function(req, res) {
//  res.sendFile(path.join(__dirname, "<../../build>", "index.html"));
//});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
