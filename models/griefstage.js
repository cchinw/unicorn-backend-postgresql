'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class GriefStage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GriefStage.hasMany(models.Community, { foreignKey: 'griefStageId' })
      GriefStage.hasMany(models.GriefImage, { foreignKey: 'griefStageId' })
      GriefStage.hasMany(models.Resource, { foreignKey: 'griefStageId' })
    }
  }
  GriefStage.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
      image: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      resource: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'GriefStage',
      tablename: 'griefstages'
    }
  )
  return GriefStage
}
