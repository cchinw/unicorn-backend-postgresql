'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Resource.belongsTo(models.GriefStage, { foreignKey: 'griefStageId' })
    }
  }
  Resource.init(
    {
      griefStageId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'griefstages',
          key: 'id'
        }
      },
      resource: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Resource',
      tableName: 'resources'
    }
  )
  return Resource
}
