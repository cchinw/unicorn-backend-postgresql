const { GriefStage } = require('../models')

const GetGriefStage = async (req, res) => {
  try {
    const stages = await GriefStage.findAll()
    res.send(stages)
  } catch (error) {
    throw error
  }
}

const GetGriefStageById = async (req, res) => {
  try {
    let stageId = parseInt(req.params.grief_stage_id)
    const stage = await GriefStage.findAll({ where: { id: stageId } })
    res.send(stage)
  } catch (error) {
    throw error
  }
}

const UpdateGriefStage = async (req, res) => {
  try {
    let stageId = parseInt(req.params.grief_stage_id)
    let updatedStage = await GriefStage.update(req.body, {
      where: { id: stageId },
      returning: true
    })
    res.send(updatedStage)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGriefStage,
  GetGriefStageById,
  UpdateGriefStage
}
