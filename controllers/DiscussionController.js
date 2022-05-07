const { Discussion } = require('../models')

const GetDiscussionByCommunity = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    const discussions = await Discussion.findAll({
      where: { communityId: communityId }
    })
    res.send(discussions)
  } catch (error) {
    throw error
  }
}

const StartDiscussion = async (req, res) => {
  try {
    let communityId = parseInt(req.params.community_id)
    let userId = parseInt(req.params.user_id)
    let discussionBody = {
      communityId,
      userId,
      ...req.body
    }
    let discussion = await Discussion.create(discussionBody)
    res.send(discussion)
  } catch (error) {
    throw error
  }
}

const DeleteDiscussion = async (req, res) => {
  try {
    let discussionId = parseInt(req.params.discussion_id)
    await Discussion.destroy({ where: { id: discussionId } })
    res.send({ message: `Deleted discussion with an id of ${discussionId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetDiscussionByCommunity,
  StartDiscussion,
  DeleteDiscussion
}
