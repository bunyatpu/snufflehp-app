var express = require('express');
var path = require('path');
require('dotenv').config()
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('./middleware/cors')
var authRoute = require('./routes/authRoute')
var userRoute = require('./routes/userRoute')
var prodRoute = require('./routes/productsRoute')
// var writingRoute = require('./routes/writing_route')
// var auth = require('./middleware/auth')

//var session      = require('express-session');

require('./config/passport');

var app = express();
//set config
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cors);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
//app.use(passport.initialize());

//--
//route api
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/products', prodRoute);
//--


//ssr
//app.use('*', serverRenderer);
//--

module.exports = app;