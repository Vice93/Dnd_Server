const db = require('../database/initSqlConnection')

module.exports = (router) => { 

  router.get('/', (req, res) => {
    db.query('select * from test').then(res => {
      res.status(200).json({ testdata: res })
    }).catch(err => {
      res.status(200).json({ testdata: err })
    })
  })

  router.get('/roll', (req, res) => {
    res.status(200).send('mordi rolla 5 dicks i ræva')
  })

  //require('somefile')(router)

  return router
}