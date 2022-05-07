const { Resource } = require('../models')

const GetResources = async (req, res) => {
  try {
    let griefStageId = parseInt(req.params.grief_stage_id)
    const griefStageResources = await Resource.findAll({
      where: { griefStageId: griefStageId }
    })
    res.send(griefStageResources)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetResources
}
