const { op } = require("sequelize");

const User = require("./models").user; //model import

async function getAllusers() {
  try {
    const userByPk = await User.findByPk(1);
    return userByPk;

    // const specificUser = await User.findOne({ where: { name: "neto" } });
    // return specificUser;// this is with to find one person
    // const Allusers = await User.findAll({ raw: true }); //raw so we dont get meta/extra data
    // return Allusers;
  } catch (e) {
    console.log(e);
  }
}

getAllusers().then((data) => console.log(data)); //first call the function. then console.log the return
//.then is similar to wait
