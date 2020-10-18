const roller = require('../service/diceroller')

module.exports = (router) => {

  router.get('/roll/die', (req, res) => {
    const dieCount = req.query.dieCount
    const sideCount = req.query.sideCount
    const modifier = req.query.modifier

    if (!dieCount || !sideCount)
      return res.status(400).json({ success: false, message: 'Missing roll parameters'})

    const roll = roller.rollDie(sideCount, dieCount, modifier)

    return res.json({ success: true, data: roll })
  })

  return router
}