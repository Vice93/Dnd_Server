

module.exports = (router) => { 

  router.get('/', (req, res) => {
    res.status(200).json({ testdata: "yay" })
  })

  //require('somefile')(router)

  return router
}