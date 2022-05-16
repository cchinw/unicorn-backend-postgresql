'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    let communities = [
      {
        name: 'Loss of a Pet',
        banner: 'banner',
        description:
          "That was your child. Your baby. The loyalty was strong, the love stronger, and now they're no more, nothing seems to make sense again.",
        population: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Loss of a Sibling',
        banner: '',
        description:
          "You have literally known them their whole lives. It still doesnt make any sense why they're no longer here.",
        population: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Loss of a Friend',
        banner: '',
        description:
          'They knew you more than anyone knew you. You were meant to do life together, yet now you have to go through the rest of your life without them.',
        population: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Loss of a Parent',
        banner: '',
        description:
          'They brought you into this world, and no matter how long you had them for, it hurts the same when you lose them.',
        population: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Loss of a Child',
        banner: '',
        description:
          'No parent should have to bury their child. It is the worst possible nightmare of any parent. This Community is for those parents who have been through the most unthinkable horror that no one should ever go through.',
        population: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('communities', communities)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('communities')
  }
}
