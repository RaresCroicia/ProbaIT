const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const dotenv = require('dotenv')
const router = require('./router')
const cors = require('cors');
const app = express()

dotenv.config()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(cors());
app.use('/api', router);

module.exports = app