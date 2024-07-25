const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controller/auth.controller');
const auth = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/user', auth, getUser);

module.exports = router;
