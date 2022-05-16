'use strict'

const middleware = require('../middleware')

module.exports = {
  async up(queryInterface, Sequelize) {
    const unicorn = await middleware.hashPassword('TYBabe2020!')
    let users = [
      {
        username: 'unicorn',
        email: 'unicorn@unicorn.com',
        passwordDigest: unicorn,
        bio: 'Always Fabulous',
        image: 'https://pbs.twimg.com/media/Em8dwaFW4AAJdbN.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('users', users)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
}
