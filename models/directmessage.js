'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class DirectMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DirectMessage.belongsTo(models.User, { foreignKey: 'from' })
      DirectMessage.belongsTo(models.User, { foreignKey: 'to' })
    }
  }
  DirectMessage.init(
    {
      from: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      to: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'DirectMessage',
      tableName: 'directmessages'
    }
  )
  return DirectMessage
}
