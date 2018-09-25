const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRouts = require('./routes/auth');
const analiticsRouts = require('./routes/analitics');
const categoryRouts = require('./routes/category');
const orderRouts = require('./routes/order');
const positionRouts = require('./routes/position');
const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURI,{ useNewUrlParser: true })
    .then(() => console.log('MongoDb connected'))
    .catch(()=> console.log(error));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require("cors")());
app.use(require('morgan')('dev'));

app.use('/api/auth', authRouts);
app.use('/api/analitics', analiticsRouts);
app.use('/api/category', categoryRouts);
app.use('/api/order', orderRouts);
app.use('/api/position', positionRouts);


module.exports = app;