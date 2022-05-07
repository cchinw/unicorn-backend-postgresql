'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UpvoteComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UpvoteComment.belongsTo(models.Comment, { foreignKey: 'commentId' })
      UpvoteComment.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  UpvoteComment.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      commentId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'comments',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'UpvoteComment',
      tableName: 'upvotecomments'
    }
  )
  return UpvoteComment
}
