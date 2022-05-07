const { User } = require('../models')
const middleware = require('../middleware')
const { user } = require('pg/lib/defaults')

// Login to user account
const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        image: user.image,
        bio: user.bio,
        admin: pilgrim.admin
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({
      status: 'Error',
      msg: 'You are not authorized to enter this page. Please vacate immediately!'
    })
  } catch (error) {
    throw error
  }
}

// Register to become a user!
const Register = async (req, res) => {
  try {
    const { username, email, password, image, bio } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      username,
      email,
      passwordDigest,
      image,
      bio
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

// Update password

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword, confirmNewPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    if (
      user &&
      newPassword === confirmNewPassword &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await User.update({ passwordDigest })
      return res.send({ status: 'You got it!', payload: user })
    }
    res
      .status(401)
      .send({ status: 'Uh-oh, try again!', msg: "You can't do that!" })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
