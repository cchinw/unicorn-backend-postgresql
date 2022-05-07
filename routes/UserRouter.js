const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get(
  '/:community_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserByCommunity
)
router.get(
  '/:community_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserByGriefStage
)
router.get(
  '/pilgrims/:pilgrim_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserById
)
router.put(
  '/:pilgrim_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatedUser
)
router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllUsers
)

module.exports = router
