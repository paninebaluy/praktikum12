const router = require('express').Router();

const getUserData = require('../middleware/users');
const getCardData = require('../middleware/cards');
const invalidUrl = require('../middleware/invalidRoutes');

router.use('/users', getUserData);
router.use('/cards', getCardData);
router.use('*', invalidUrl);

module.exports = router;
