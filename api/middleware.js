const secret = process.env.ROLLHUB_SECRET
const jwt = require('jsonwebtoken')

const generateToken = (username) => {
  let token = jwt.sign({username: username}, secret, {expiresIn: '72h'});

  return token;
}

const verifyToken = (req, res, next) => {
  let token = req.header('Authorization')

  if(token && token.startsWith('Bearer '))
    token = token.slice(7, token.length)

  if(!token || token === '') {
    res.status(401)
    return res.json({success: false, message: 'Token can not be null or empty.'})
  } 

  jwt.verify(token, secret, (err, decoded) => {
    if(err) {
      res.status(401)
      return res.json({success: false, message: 'Token validation failed.'} )
    } 
    
    req.decoded = decoded
    next()
  })
}

module.exports = {
  generateToken: generateToken,
  verifyToken: verifyToken
}