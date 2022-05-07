const { DirectMessage } = require('../models')

const GetMessagesBySentTo = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const dms = await DirectMessage.findAll({ where: { sentTo: userId } })
    res.send(dms)
  } catch (error) {
    throw error
  }
}

const DeleteMessage = async (req, res) => {
  try {
    let messageId = parseInt(req.params.message_id)
    await DirectMessage.destroy({ where: { id: messageId } })
    res.send({ message: `Deleted message with an id of ${messageId}` })
  } catch (error) {
    throw error
  }
}

const SendMessage = async (req, res) => {
  try {
    let sentTo = parseInt(req.params.sent_to)
    let sentFrom = parseInt(req.params.sent_from)
    let messageBody = {
      sentTo,
      sentFrom,
      ...req.body
    }
    let message = await DirectMessage.create(messageBody)
    res.send(message)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetMessagesBySentTo,
  DeleteMessage,
  SendMessage
}
