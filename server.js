#!/usr/bin/env node

// Import required modules
import express from 'express';
import minimist from 'minimist';
import {rps, rpsls} from './lib/rpsls.js';

// Create an instance of the Express application
const app = express();

// Parse command line arguments using minimist
var arg = minimist(process.argv.slice(2));

// Set the port for the application
const PORT = arg.port || 5000;

// Configure middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Define routes and corresponding request handlers

// Default route
app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
});

// Route for playing Rock-Paper-Scissors
app.get('/app/rps', (req, res) => {
	res.status(200).send(rps());
});

// Route for playing Rock-Paper-Scissors-Lizard-Spock
app.get('/app/rpsls', (req, res) => {
	res.status(200).send(rpsls());
});

// Route for playing Rock-Paper-Scissors with a specific shot
app.get('/app/rps/play', (req, res) => {
	res.status(200).send(rps(req.query.shot));
});

// Route for playing Rock-Paper-Scissors-Lizard-Spock with a specific shot
app.get('/app/rpsls/play', (req, res) => {
	res.status(200).send(rpsls(req.query.shot));
});

// Route for playing Rock-Paper-Scissors with a specific shot (via POST request)
app.post('/app/rps/play', (req, res) => {
	res.status(200).send(rps(req.body.shot));
});

// Route for playing Rock-Paper-Scissors-Lizard-Spock with a specific shot (via POST request)
app.post('/app/rpsls/play', (req, res) => {
	res.status(200).send(rpsls(req.body.shot));
});

// Route for playing Rock-Paper-Scissors with a specific shot in the URL
app.get('/app/rps/play/:arg', (req, res) => {
	res.status(200).send(rps(req.params.arg));
});

// Route for playing Rock-Paper-Scissors-Lizard-Spock with a specific shot in the URL
app.get('/app/rpsls/play/:arg', (req, res) => {
	res.status(200).send(rpsls(req.params.arg));
});

// 404 route for any other undefined routes
app.get('*', (req, res) => {
	res.status(404).send('404 NOT FOUND');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});