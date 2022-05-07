'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, { foreignKey: 'commenterId' })
      Comment.belongsTo(models.Discussion, { foreignKey: 'discussionId' })
    }
  }
  Comment.init(
    {
      comment: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      upvotes: DataTypes.INTEGER,
      discussionId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'discussions',
          key: 'id'
        }
      },
      commenterId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}
