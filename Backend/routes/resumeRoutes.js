const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createResume,
  getResumes,
  getResume,
  updateResume,
  deleteResume,
} = require('../controller/resume.controller');

router.post('/', auth, createResume);
router.get('/', auth, getResumes);
router.get('/:id', auth, getResume);
router.put('/:id', auth, updateResume);
router.delete('/:id', auth, deleteResume);

module.exports = router;
