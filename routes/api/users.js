const express = require('express');
const router = express.Router();

const users = require('../../controllers/user');

router.get('/', users.getUsers);
router.post('/signup', users.addUser);

module.exports = router;