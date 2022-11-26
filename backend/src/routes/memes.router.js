const express = require('express');
const { listMemes, createMeme, getMeme, deleteMeme, updateMeme } = require('../controllers/memes');
const router = express.Router();

router.get('/', listMemes);
router.post('/', createMeme);
router.get('/:id', getMeme);
router.delete('/:id', deleteMeme);
router.patch('/:id', updateMeme);

module.exports = router;