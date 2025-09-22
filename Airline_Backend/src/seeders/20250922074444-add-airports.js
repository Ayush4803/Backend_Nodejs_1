'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  await queryInterface.bulkInsert('Airports',[
    {
      name:'Netaji Subhash Chandra Bose International Airport',
      cityId:55,
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name:'BEHLA AIRPORT',
      cityId:55,
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name:'Jaipur International Airport',
      cityId:56,
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name:'Muzaffarpur Airport',
      cityId:62,
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name:'Jay Prakash Narayan International Airport',
      cityId:58,
      createdAt:new Date(),
      updatedAt: new Date()
    }

  ],{})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
