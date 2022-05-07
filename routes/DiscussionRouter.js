const router = require('express').Router()
const controller = require('../controllers/DiscussionController')
const middleware = require('../middleware')

router.get(
  '/:community_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetDiscussionByCommunity
)
router.post(
  '/:community_id/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.StartDiscussion
)
router.delete(
  '/:discussion_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteDiscussion
)

module.exports = router
