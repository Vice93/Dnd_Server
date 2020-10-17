const db = require('../database/initPool')

module.exports = (router) => { 

  router.get('/', (req, res) => {
    db('Users').select().then(rows => {
      res.json({ data: rows })
    }).catch(err => {
      console.log(err)
      res.status(500).json({ err: err })
    })
  })

  require('./users')(router)

  return router
}