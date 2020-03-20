const users = require('../data/users');
const { userNotFound } = require('../data/responses');

const getOneUser = (req, res) => {
  // eslint-disable-next-line arrow-body-style
  const user = users.find((item) => {
    // eslint-disable-next-line no-underscore-dangle
    return item._id === req.params.id;
  });

  if (!user) {
    res.status(404).send(userNotFound);
  }
  res.send(user);
};

const getUserData = (req, res) => {
  res.status(200).send(users);
  res.end();
};

module.exports = {
  getOneUser,
  getUserData,
};
