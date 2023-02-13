const jwt = require("jsonwebtoken");

const generateUsersToken = (id, email) => {
  return jwt.sign({ id, email }, "princykaproject69");
};

module.exports = {
  generateUsersToken,
};
