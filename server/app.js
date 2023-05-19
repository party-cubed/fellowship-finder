const express = require('express');
const path = require('path');

// initilize App
const app = express();

// connect App to client
const clientPath = path.resolve(__dirname, '../dist');
app.use(express.static(clientPath));

// configure App
app.use(express.json());

// ADD APP ROUTERS

module.exports = app;
