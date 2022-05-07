const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

// Create a function to hash password and encrypt it
const hashPassword = async (password) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  return hashedPassword
}

//Create a function to compare password to make sure it matches with user input. Returns true if its a match!
const comparePassword = async (storedPassword, password) => {
  let passwordMatch = await bcrypt.compare(password, storedPassword)
  return passwordMatch
}

// Create a function to accept payload used to create the token and encrypt it
const createToken = (payload) => {
  let token = jwt.sign(payload, APP_SECRET)
  return token
}

// Create a function to verify if token is legit or not. On true, it passes the decoded payload to the next function
const verifyToken = (req, res, next) => {
  const { token } = res.locals
  let payload = jwt.verify(token, APP_SECRET)
  if (payload) {
    res.locals.payload = payload
    return next()
  }
  res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
}

// Create a function to verify if user has authorization to proceed with certain commands on the page
const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    if (token) {
      res.locals.token = token
      return next()
    }
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}

module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword
}
