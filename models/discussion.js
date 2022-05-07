'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Discussion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Discussion.hasMany(models.User, { foreignKey: 'discussionId' })
      Discussion.belongsTo(models.Community, { foreignKey: 'communityId' })
      Discussion.hasMany(models.Comment, { foreignKey: 'commentId' })
      Discussion.belongsTo(models.User, { foreignKey: 'commenterId' })
    }
  }
  Discussion.init(
    {
      topic: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      upvotes: DataTypes.INTEGER,
      commenterId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      communityId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'communities',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Discussion',
      tableName: 'discussions'
    }
  )
  return Discussion
}
