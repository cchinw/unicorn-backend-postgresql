'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class GriefImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GriefImage.belongsTo(models.GriefStage, { foreignKey: 'griefStageId' })
    }
  }
  GriefImage.init(
    {
      griefStageId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'griefstages',
          key: 'id'
        }
      },
      image: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'GriefImage',
      tableName: 'griefimages'
    }
  )
  return GriefImage
}
