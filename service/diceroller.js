const dr = require('rpg-dice-roller')

const rollDie = (sideCount, dieCount, modifier, keep) => {
  const exp = notation(sideCount, dieCount, modifier, keep)
  
  return new dr.DiceRoll(exp).export(dr.exportFormats.OBJECT)
}

const rollMultiple = (rolls) => {
  const notations = rolls.map(r => {
    return new dr.DiceRoll(notation(r.sCount, r.dCount, r.mod, r.keep))
  })
  
  return new dr.DiceRoller(notations).export(dr.exportFormats.OBJECT)
}

const notation = (sideCount, dieCount, modifier, keep) => {
  return `${dieCount}d${sideCount}${keep ? `k${keep}` : ''}${modifier ? `+${modifier}` : ''}`
}

module.exports = {
  rollDie,
  rollMultiple
}