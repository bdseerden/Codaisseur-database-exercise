"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Bo Seerden",
          email: "bo@seerden.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Khalil Gharbaoui",
          email: "khalil@gharbaoui.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nabila Gharbaoui",
          email: "nabila@gharbaoui.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
