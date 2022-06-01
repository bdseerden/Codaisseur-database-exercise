"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Finishing back-end week",
          deadline: "End of this week",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Score green on the assessment",
          deadline: "Friday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Finishing webshop project week",
          deadline: "Next week",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
