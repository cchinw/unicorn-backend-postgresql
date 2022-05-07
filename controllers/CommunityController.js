const { Community, User } = require('../models')

const GetCommunitiesByGriefStage = async (req, res) => {
  try {
    let stageId = parseInt(req.params.grief_stage_id)
    const communities = await Community.findAll({
      where: { stageId: stageId }
    })
    res.send(communities)
  } catch (error) {
    throw error
  }
}

const GetCommunityById = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    const community = await Community.findByPk(communityId)
    res.send(community)
  } catch (error) {
    throw error
  }
}

const CreateCommunity = async (req, res) => {
  try {
    let stageId = parseInt(req.params.grief_stage_id)
    let communityBody = {
      stageId,
      ...req.body
    }
    let community = await Community.create(communityBody)
    res.send(community)
  } catch (error) {
    throw error
  }
}

const UpdateCommunity = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    let updatedCommunity = await Community.update(req.body, {
      where: { id: communityId },
      returning: true
    })
    res.send(updatedCommunity)
  } catch (error) {
    throw error
  }
}

const DeleteCommunity = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    await Community.destroy({ where: { id: communityId } })
    User.findAll({
      where: { communityId: communityId }
    }).update({ communityId: null })
    res.send({ message: `Deleted community with an id of ${communityId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCommunitiesByGriefStage,
  CreateCommunity,
  UpdateCommunity,
  DeleteCommunity,
  GetCommunityById
}
