const { GriefImage } = require('../models')

const GetGriefImages = async (req, res) => {
  try {
    let griefStageId = parseInt(req.params.grief_stage_id)
    const griefStageImages = await GriefImage.findAll({
      where: { griefStageId: griefStageId }
    })
    res.send(griefStageImages)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGriefImages
}
