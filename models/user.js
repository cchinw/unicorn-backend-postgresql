'use strict'
const { user } = require('pg/lib/defaults')
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
      User.belongsTo(models.GriefStage, { foreignKey: 'griefStageId' })
      User.hasMany(models.Comment, { foreignKey: 'userId' })
      User.hasMany(models.DirectMessage, { foreignKey: 'to' })
      User.hasMany(models.DirectMessage, { foreignKey: 'from' })
      User.hasMany(models.Community, { foreignKey: 'creatorId' })
      User.hasMany(models.Discussion, { foreignKey: 'posterId' })
      User.hasMany(models.UpvoteComment, { foreignKey: 'userId' })
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
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
