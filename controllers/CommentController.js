const { Comment, User, UpvoteComment } = require('../models')

const GetCommentsByDiscussion = async (req, res) => {
  try {
    let discussionId = parseInt(req.params.discussion_id)
    const comments = await Comment.findAll({
      where: { discussionId: discussionId },
      order: ['createdAt'],
      include: [{ model: User }, { model: UpvoteComment }]
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let discussionId = parseInt(req.params.discussion_id)
    let userId = parseInt(req.params.user_id)
    let commentBody = {
      userId,
      ...req.body,
      discussionId
    }
    let newComment = await Comment.create(commentBody)
    res.send(newComment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let commenterId = parseInt(req.params.comment_id)
    let userId = parseInt(req.params.user_id)
    let updated = await Comment.update(req.body, {
      where: { commenterId, userId }
    })
    res.send(updated)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted comment with an id of ${commentId}` })
  } catch (error) {
    throw error
  }
}

const VoteComment = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let commentId = parseInt(req.params.comment_id)
    let upvoteBody = {
      userId,
      commentId
    }
    let upvoted = await UpvoteComment.count({ where: upvoteBody })
    if (upvoted > 0) {
      res.send('You have already upvoted this comment')
    } else {
      let newCommentUpvote = await UpvoteComment.create(upvoteBody)
      res.send(newCommentUpvote)
    }
  } catch (error) {
    throw error
  }
}

const DownvoteComment = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let commentId = parseInt(req.params.comment_id)
    let upvoteBody = {
      userId,
      commentId
    }
    let upvoted = await UpvoteComment.count({ where: likeBody })
    if (upvoted > 0) {
      let downvote = await UpvoteComment.destroy({ where: upvoteBody })
      res.status(200).send('downvoted')
    } else {
      res.status(200).send('not yet upvoted')
    }
  } catch (error) {
    throw error
  }
}

const GetUpvotedComments = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let upvotedComments = await UpvoteComment.findAll({
      where: { userId },
      include: Comment
    })
    res.send(upvotedComments)
  } catch (error) {
    throw error
  }
}

const CheckUpvote = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let commentId = parseInt(req.params.comment_id)
    let upvoteBody = {
      userId,
      commentId
    }
    let upvoted = await UpvoteComment.count({ where: upvoteBody })
    if (upvoted > 0) {
      res.send('already upvoted')
    } else {
      res.send('not yet upvoted')
    }
  } catch (error) {
    throw error
  }
}

const GetUserComments = async (req, res) => {
  try {
    let commenterId = parseInt(req.params.user_id)
    const comments = await Comment.findAll({
      where: { commenterId }
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const UpvoteCount = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    let voteCount = await UpvoteComment.count({ where: { commentId } })
    res.json({ number: voteCount })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCommentsByDiscussion,
  CreateComment,
  UpdateComment,
  DeleteComment,
  VoteComment,
  DownvoteComment,
  GetUpvotedComments,
  CheckUpvote,
  GetUserComments,
  UpvoteCount
}
