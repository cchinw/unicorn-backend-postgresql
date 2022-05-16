// 'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    let griefstages = [
      {
        title: 'Shock and Denial',
        description:
          'Feelings of shock and denial are unavoidable in nearly every situation, even if you could foresee it happening. It’s a way for your brain to begin to understand what has happened. You will probably react to learning of the loss with numbed disbelief. You may deny the reality of the loss at some level, in order to avoid the pain. The shock provides emotional protection from being overwhelmed all at once. This may last for weeks. This type of grief is probably one of the biggest and most important stages that people go through once they start processing through the stages of grief after suicide. Examples of emotions during this stage of grief: Mourning, Sadness, Confusion, Discomfort. Reality hits hard. No matter the cause, you’re still losing or missing something. There’s unwillingness to accept the loss.',
        image: 'https://i.ibb.co/jMv18dg/Untitled-design-34.png',
        resource: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Pain and Guilt',
        description:
          'As the shock wears off, it is replaced with the suffering of unbelievable pain. Although excruciating and almost unbearable, it is important that you experience the pain fully, and not hide it, avoid it or escape from it with alcohol or drugs. You may have guilty feelings or remorse over things you did or didn’t do with your loved one. Life feels chaotic and scary during this phase. Out of all the stages of grief after an affair, this is the one that might be most prevalent because realization sets in that their choice was something that could have been prevented and stopped and that this suffering and pain were preventable. Examples of emotions during this stage of grief: Sadness, Guilt, Desperation and Betrayed. It’s very much ‘if only’ and ‘I ought to have’ [at this stage]. These thoughts are perfectly normal. Allow yourself to self-doubt, but know you did your best with the resources you had in that moment.',
        image: 'https://i.ibb.co/XVypXHj/Untitled-design-35.png',
        resource: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Anger and bargaining',
        description: `Frustration gives way to anger, and you may lash out and lay unwarranted blame for the death on someone else. Please try to control this, as permanent damage to your relationships may result. This is not a time for the release of bottled-up emotion. You may rail against fate, questioning “Why me?” You may also try to bargain in vain with the powers that be for a way out of your despair: “I will never drink again if you just bring him back”! It’s normal to feel anger in times of grief. If a loved one passes away, you might be angry they left you alone. It’s an indicator that you’re not wallowing in the anger. It’s part of the shifting process. Depending on if you’re ready for grief counseling, this is a step that it might be a good choice to look into. Examples of emotions during this stage of grief: Anger, Resentment, Bargaining and Stubbornness.`,
        image: 'https://i.ibb.co/1ZsKQnQ/Untitled-design-36.png',
        resource: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'madamex',
        description: 'Madame X',
        image: 'madamex@madamex.com',
        resource: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'madamex',
        description: 'Madame X',
        image: 'madamex@madamex.com',
        resource: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'madamex',
        description: 'Madame X',
        image: 'madamex@madamex.com',
        resource: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'madamex',
        description: 'Madame X',
        image: 'madamex@madamex.com',
        resource: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('griefstages', griefstages)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('griefstages')
  }
}
