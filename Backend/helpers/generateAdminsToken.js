const jwt = require("jsonwebtoken");

const generateAdminsToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, "princykaproject69");
};

module.exports = {
  generateAdminsToken,
};
