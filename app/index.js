const express = require('express')
const bodyParser = require('body-parser');
const crypto = require('crypto');
const request = require('superagent');
const path = require('path');
const session = require('express-session');
const fs = require('fs')

const app = express()
const port = 80;

app.use(bodyParser.text());
app.use(session({resave: true, saveUninitialized: true, secret: 'ctBdKgEqM5SVG9LvZcnXRtJk', cookie: { maxAge: 3600000 }}));

app.get('/player', function(req, res){
    sessionData = req.session || {};
    sessionData.websiteUser = true;
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/keys', function(req, res){
    sessionData = req.session;
    console.log("session: ", sessionData);
    if (!sessionData.websiteUser){
        res.send('nosession');
        return;
    }
    console.log("keys: ", req.query);
    let keyName = req.query.k;
    if (keyName){
        let keypath = `/tmp/keys/${keyName}`
        console.log(keypath)
        let buffer = fs.readFileSync(keypath)
        res.send(buffer)
    }
});



app.listen(port, () => console.log(`App listening on port ${port}!`))