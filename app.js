/* Imports */
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const appEnv = process.env.APP_ENV || 'dev'
/**
* Initialize the application using express 
*/
const app = express()

/**
 * Enable cors if the environment is development
 */
console.log(`Allow cors origin: ${process.env.REACT_URL}`)
app.use(cors({
  origin: [process.env.REACT_URL]
}))
/** 
* Use bodyparser to parse the requests/responses we send. We are mostly using json, but some formdata is sent as urlencoded so we support both these. 
* There are also various more, but we wont be using those 
*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(logger(appEnv))
/**
 * Setup API routes
 */
app.use('/v1', require('./api/v1')(express.Router()))


/**
 * Finally we tell the app to listen to all traffic on the specified port
 */
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))