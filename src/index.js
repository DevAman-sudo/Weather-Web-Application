// Imported NPM Packages //
const express = require('express');
const app = express();
const chalk = require('chalk');
const http = require('http').createServer(app);
const path = require('path');
require('dotenv').config();

// Server Port Enviroment Setup //
const port = process.env.PORT || 8080 ;

// File Path Decleration //
const staticPath = path.join( __dirname , '../public/');

// Using StaticPage Public Folder To Server //
app.use(express.static(staticPath));

// Setting Up App Routes //
app.get('/' , (req , res) => {
	res.sendFile( path.join( staticPath , 'index.html'));
});

app.get('*' , (req , res) => {
	res.send(`404 Error => Page Not Found`);
});

// Listening To Http Server At Port 8080 //
http.listen(port , (error) => {
	if (error) {
		console.log( chalk.blue.bgRed(`Error Found => ${error}`));
	} else {
		console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
	}
});