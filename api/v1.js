const db = require('../database/initSqlConnection')

module.exports = (router) => { 

  router.get('/', (req, res) => {
    db.query('select * from test').then(res => {
      res.status(200).json({ testdata: res })
    }).catch(err => {
      res.status(200).json({ testdata: err })
    })
  })

  //require('somefile')(router)

  return router
}