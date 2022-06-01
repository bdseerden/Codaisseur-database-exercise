"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Bo's todolist",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Khalil's todolist",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nabila's todolist",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
