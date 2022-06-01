const User = require("./models").user;
const TodoItem = require("./models").todoItem;

// async function getAllUsers() {
//   try {
//     const allUsers = await User.findAll({ raw: true });
//     return allUsers;
//   } catch (e) {
//     console.log(e);
//   }
// }

// getAllUsers().then((users) => console.log(users));

// async function getAllToDoItems() {
//   try {
//     const allToDoItems = await todoItem.findAll({ raw: true });
//     return allToDoItems;
//   } catch (e) {
//     console.log(e);
//   }
// }

// getAllToDoItems().then((todoItems) => console.log(todoItems));

// async function getSpecificUser() {
//   try {
//     const userByPk = await User.findByPk(3);
//     return userByPk.dataValues;
//   } catch (e) {
//     console.log(e);
//   }
// }

// getSpecificUser().then((users) => console.log(users));

// async function createUser() {
//   try {
//     const user1 = await User.create({
//       name: "Zakaria Gharbaoui",
//       email: "zakaria@gharbaoui.com",
//       phone: 1234567,
//       password: "test",
//     });

//     return [user1].map((item) => item.toJSON());
//   } catch (e) {
//     console.error(e);
//   }
// }

// createUser().then((users) => console.log(users));

async function getImportantToDoItems() {
  try {
    const importantToDoItem = await TodoItem.findAll({
      where: {
        important: true,
      },
    });
    return importantToDoItem;
  } catch (e) {
    console.log(e);
  }
}

getImportantToDoItems().then((todoItems) => console.log(todoItems));
