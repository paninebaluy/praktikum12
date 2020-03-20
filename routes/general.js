const { pageNotFound } = require('../data/responses');

const invalidUrl = (req, res) => {
  res.status(404).send(pageNotFound);
};

module.exports = {
  invalidUrl,
};
