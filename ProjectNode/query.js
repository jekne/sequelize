const { Op } = require("sequelize");

const User = require("./sample-data").user;

async function getAllUsers() {
  try {
    const userByPk = await User.findByPk(1);
    return userByPk;
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    // const allUsers = await User.findAll({ raw: true });
    // return allUsers;
  } catch (e) {
    console.log(e);
  }
}

getAllUsers().then((users) => console.log(users));
