const { user } = require('pg/lib/defaults')
const { User } = require('../models')

const GetUserByCommunity = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    const users = await User.findAll({
      where: { communityId: communityId }
    })
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const UpdatedUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let user = await User.findByPk(userId)
    if (user.communityId !== null && req.body.communityId !== null) {
      return res.send(null)
    }
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const user = await User.findByPk(pilgrimId)
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUserByCommunity,
  GetAllUsers,
  UpdatedUser,
  GetUserById
}
