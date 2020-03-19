const router = require('express').Router();
const { getOneUser, checkUrl } = require('./helpers');

router.get('/', checkUrl);
router.get('/users/:id', getOneUser);

module.exports = router;
