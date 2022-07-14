const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.static('images'));
app.get('/index.html', (req, res) => res.sendFile(__dirname + '/' + 'index.html'));
app.get('/process_get', (req, res) => {
    let response = {
        first_name : req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
app.listen(8081);