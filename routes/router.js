const router = require('express').Router();
const { getOneUser, getUserData } = require('./users');
const { getCardData } = require('./cards');
const { invalidUrl } = require('./general');

router.get('/users', getUserData);
router.get('/cards', getCardData);
router.get('/users/:id', getOneUser);
router.get('*', invalidUrl);

module.exports = router;
