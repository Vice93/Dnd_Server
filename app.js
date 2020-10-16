/* Imports */
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

/**
* Initialize the application using express 
*/
const app = express()

/** 
* Use bodyparser to parse the requests/responses we send. We are mostly using json, but some formdata is sent as urlencoded so we support both these. 
* There are also various more, but we wont be using those 
*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
console.log(process.env.NODE_ENV) // production??
app.use(logger(process.env.NODE_ENV || 'dev'))
/**
 * Setup API routes
 */
app.use('/v1', require('./api/v1')(express.Router()))

//app.use('/api', usersApi)
/**
 * Finally we tell the app to listen to all traffic on the specified port
 */
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))