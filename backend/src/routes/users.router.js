const express = require('express');
const { showUsers, registerUser, loginUser } = require('../controllers/users');
const router = express.Router();

router.get('/', showUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
