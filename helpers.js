const { users, cards } = require('./data');
const { pageNotFound, userNotFound } = require('./responses');

const getOneUser = (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((item) => { return item._id === req.params.id; });

  if (!user) {
    res.status(404).send(userNotFound);
  }
  res.send(user);
};

const checkUrl = (req, res, next) => {
  if (!req.originalUrl) {
    res.status(404).send(pageNotFound);
  }
  next();
};

const getData = (req, res) => {
  if (req.originalUrl === '/users') {
    res.send(users);
  } else if (req.originalUrl === '/cards') {
    res.send(cards);
  }
};

module.exports = {
  getOneUser,
  checkUrl,
  getData,
};
