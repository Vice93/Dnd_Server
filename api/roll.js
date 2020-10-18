const roller = require('../service/diceroller')

const setMinToOne = (number) =>  {
  if(number <= 0) return 1

  return number
}

const checkParams = (context) => {
  const invalidParams = []
  for (let prop in context) {
    const value = context[prop]
    console.log(`${prop}: ${context[prop]}`)
    switch(prop) {
      case 'dCount':
      case 'sCount':
        if (!value || isNaN(value)) 
          invalidParams.push(prop)
        break
      case 'mod':
      case 'keep':
        if(value && isNaN(value))
          invalidParams.push(prop)
        break
    }
  }

  if (invalidParams.length > 0)
    return `Invalid parameters: ${invalidParams.map(prop => {return `${prop}: ${context[prop]}`})}`
  return undefined
}

module.exports = (router) => {

  router.get('/roll/die', (req, res) => {
    const context = {
      dCount: req.query.dCount,
      sCount: req.query.sCount,
      mod: req.query.mod,
      keep: req.query.keep
    }

    const err = checkParams(context)

    if (err)
      return res.status(400).json({ success: false, message: err})
    
    const roll = roller.rollDie(context.sCount, context.dCount, context.mod, context.keep)

    return res.json({ success: true, data: roll })
  })

  router.post('/roll/multiple', (req, res) => {
    const rollsArr = req.body.rolls

    if(!rollsArr || rollsArr.length <= 0)
      return res.status(400).json({ success: false, message: 'Missing body' })

    const err = rollsArr.forEach(roll => {
      return checkParams(roll)
    })

    if (err)
      return res.status(400).json({ success: false, message: err})

    const rolls = roller.rollMultiple(rollsArr)

    return res.json({ success: true, data: rolls })
  })

  return router
}