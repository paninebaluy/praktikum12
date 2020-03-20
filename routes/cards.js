const cards = require('../data/cards');

const getCardData = (req, res) => {
  res.status(200).send(cards);
};

module.exports = {
  getCardData,
};
