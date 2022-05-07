const Router = require('express').Router()
const controller = require('../controllers/GriefImageController')
const middleware = require('../middleware')

Router.get(
  '/:grief_stage_id/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetGriefImages
)

module.exports = Router
