const db = require('../database/initSqlConnection')

module.exports = (router) => { 

  router.get('/', (req, res) => {
    db.query('select * from test').then(res => {
      res.status(200).json({ data: res })
    }).catch(err => {
      res.status(200).json({ err: err })
    })
  })

  router.get('/roll', (req, res) => {

    res.status(200).send('mordi rolla 5 dicks i ræva')
  })

  router.get('/nic', (req ,res) => {
    res.send('hva vil du nic, jeg knuller mordi med 5 pikk per rævhul')
  })

  //require('somefile')(router)

  return router
}