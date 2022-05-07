const router = require('express').Router()
const controller = require('../controllers/DirectMessageController')
const middleware = require('../middleware')

router.get(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetMessagesBySentTo
)
router.post(
  '/:sent_to/:sent_from',
  middleware.stripToken,
  middleware.verifyToken,
  controller.SendMessage
)
router.delete(
  '/:message_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteMessage
)

module.exports = router
