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
      Community.hasMany(models.User, { foreignKey: 'communityId' })
      Community.hasMany(models.Discussion, { foreignKey: 'communityId' })
      Community.belongsToMany(models.User, {
        as: 'community_creator',
        through: models.UserCommunity,
        foreignKey: 'creatorId'
      })
    }
  }
  Community.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      banner: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      description: DataTypes.TEXT,
      population: {
        type: DataTypes.INTEGER,
        allowNull: false
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
