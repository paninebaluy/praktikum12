const getUserData = require('express').Router({ mergeParams: true });
const users = require('../data/users');
const responses = require('../data/responses');

getUserData.get('/:id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((item) => item._id === req.params.id);
  if (!user) {
    const { userNotFound } = responses.find((response) => response.userNotFound);
    res.status(404).send(userNotFound);
  }
  res.status(200).send(user);
});

getUserData.get('/', (req, res) => {
  res.status(200).send(users);
});

module.exports = getUserData;
