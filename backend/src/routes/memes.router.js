const express = require('express');
const { listMemes, createMeme, getMeme, deleteMeme, updateMeme } = require('../controllers/memes');
const { authenticateToken } = require('../controllers/users');
const router = express.Router();

router.get('/', listMemes);
router.post('/', authenticateToken, createMeme);
router.get('/:id', getMeme);
router.delete('/:id', deleteMeme);
router.patch('/:id', authenticateToken, updateMeme);

module.exports = router;