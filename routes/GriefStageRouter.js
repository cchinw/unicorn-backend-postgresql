const Router = require('express').Router()
const controller = require('../controllers/GriefStageController')
const middleware = require('../middleware')

Router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetGriefStage
)
Router.get(
  '/:grief_stage_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetGriefStageById
)
Router.put(
  '/:grief_stage_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateGriefStage
)

module.exports = Router
