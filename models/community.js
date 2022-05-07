'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Community.belongsTo(models.User, { foreignKey: 'creatorId' })
      Community.belongsTo(models.GriefStage, { foreignKey: 'griefStageId' })
      Community.hasMany(models.Discussion, { foreignKey: 'communityId' })
      Community.hasMany(models.User, { foreignKey: 'communityId' })
    }
  }
  Community.init(
    {
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      description: DataTypes.TEXT,
      creatorId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      griefStageId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'griefstages',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Community',
      tableName: 'communities'
    }
  )
  return Community
}
