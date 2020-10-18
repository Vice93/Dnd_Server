const diceRoller = require('rpg-dice-roller')

const rollDie = (sideCount, dieCount, modifier) => {
  const exp = expression(sideCount, dieCount, modifier)

  const roll = new diceRoller.DiceRoll(exp)
  
  return roll.export(diceRoller.exportFormats.OBJECT)
}

const expression = (sideCount, dieCount, modifier) => {
  return `${dieCount}d${sideCount}${modifier !== undefined ? ` + ${modifier}` : ''}`
}

module.exports = {
  rollDie
}