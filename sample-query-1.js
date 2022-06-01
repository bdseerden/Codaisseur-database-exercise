const User = require("./models").user;
const { Op } = require("sequelize");

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    // const allUsers = await User.findAll({ raw: true });
    // Resolves with an object or undefined (if no matching rows exist)

    // Select all rows where firstName === 'Dave', but only return the first one.
    // Resolves with an object or undefined (if no matching rows exist)
    // const specificUser = await User.findOne({ where: { name: "Dave" } });

    // Select a row by its primary key. Resolves with an object or undefined (if no matching rows exist)
    const userByPk = await User.findByPk(3, { raw: true });

    // A query using a numeric operator
    // const tallUsers = await User.findAll({
    //   // WHERE height >= 175
    //   where: {
    //     height: {
    //       [Op.gte]: 175, // gte stands for 'greater than or equal'
    //     },
    //   },
    // });

    return tallUsers.dataValues;
  } catch (e) {
    console.log(e);
  }
}

getAllUsers().then((users) => console.log(users));
