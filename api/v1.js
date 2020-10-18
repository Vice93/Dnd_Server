const db = require('../database/initPool')

module.exports = (router) => { 

  router.get('/', (req, res) => {
    db('Users').select().then(rows => {
      res.json({ data: rows })
    }).catch(err => {
      console.log(err, err.message)
      res.status(500).json({ err: err, message: err.message })
    })
  })

  require('./users')(router)
  require('./roll')(router)

  return router
}