const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan') ;
require('dotenv').config()

const app = express()
const port = 3333

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// Kết nối đến cơ sở dữ liệu
mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch(error => console.error('Connection error:', error));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//setup routes
const roomRoute = require('./route/roomRoutes')
app.use('/api/',roomRoute)
