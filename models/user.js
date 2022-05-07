'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Community, { foreignKey: 'communityId' })
      User.belongsTo(models.Discussion, { foreignKey: 'discussionId' })
      User.hasMany(models.Comment, { foreignKey: 'userId' })
      User.hasMany(models.DirectMessage, { foreignKey: 'to' })
      User.hasMany(models.DirectMessage, { foreignKey: 'from' })
      User.hasMany(models.Community, { foreignKey: 'creatorId' })
      User.hasMany(models.Discussion, { foreignKey: 'posterId' })
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bio: DataTypes.TEXT,
      communityId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'communities',
          key: 'id'
        }
      },
      discussionId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'discussions',
          key: 'id'
        }
      },
      image: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
