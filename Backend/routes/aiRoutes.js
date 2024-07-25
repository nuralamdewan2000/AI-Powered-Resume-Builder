const express = require('express');
const router = express.Router();
const { getAISuggestions } = require('../controller/aiController');
const auth = require('../middleware/authMiddleware');

router.post('/suggestions', auth, getAISuggestions);

module.exports = router;
