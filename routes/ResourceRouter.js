const Router = require('express').Router()
const controller = require('../controllers/ResourceController')
const middleware = require('../middleware')

Router.get(
  '/:grief_stage_id/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetResources
)

module.exports = Router
