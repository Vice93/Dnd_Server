const db = require('../database/initPool')

module.exports = (router) => { 

  router.get('/', (req, res) => {
    res.send('works')
  })

  require('./users')(router)
  require('./roll')(router)

  return router
}