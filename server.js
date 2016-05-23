// Require the packages we need
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const proxy = require('express-http-proxy');
const express = require('express');
const devMiddleWare = require('webpack-dev-middleware');
const hotMiddleWare = require('webpack-hot-middleware');

// Build the app server
const app = express();
const webpackConfig = webpack(config);

//Create new bundle when files are changed. 
app.use(devMiddleWare(webpackConfig));

//Enable hot reloading
app.use(hotMiddleWare(webpackConfig));

// express static Middleware. Where to look for static assets
app.use(express.static(path.resolve(__dirname, './'),{
	index: 'index.html'
}));

//Proxy for all req starting with leading /api in URL path
app.use('/api', proxy('https://api.github.com'));

// Start the server
app.listen(9876, () => console.log('Listening @ localhost:9876'));
