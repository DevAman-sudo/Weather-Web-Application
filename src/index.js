// NPM Packages //
const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const http = require('http').createServer(app);

// Port Setup //
const port = process.env.PORT || 8080 ;

// Declering File Path //
const staticPath = path.join( __dirname , '../public/');

// Using public Folder As Static Page //
app.use(express.static(staticPath));

// Setting Up Routes For App //
app.get('/' , (req , res) => {
    res.sendFile( path.join(staticPath , 'index.html'));
});

app.get('/forcast' , (req , res) => {
    res.sendFile( path.join(staticPath , 'main.html'));
});

// Listining To Http Server //
http.listen(port , (err) => {
    if (err) {
        console.log(`Error Found => ${err}`);
    } else {
        console.log('http://127.0.0.1:8080');
    }
});
