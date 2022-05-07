const Router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

Router.post(
  '/:user_id/:discussion_id/new',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)
Router.get(
  '/:discussion_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetCommentsByDiscussion
)
Router.get(
  '/upvote/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpvoteCount
)
Router.post(
  '/:user_id/upvote/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.VoteComment
)
Router.delete(
  '/:id/downvote/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DownvoteComment
)
Router.get(
  '/:user_id/upvote/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckUpvote
)
Router.delete(
  '/:user_id/delete/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)
Router.put(
  '/:user_id/update/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateComment
)
Router.get(
  '/:user_id/userupvotes',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUpvotedComments
)
Router.get(
  '/:user_id/usercomments',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserComments
)

module.exports = router
