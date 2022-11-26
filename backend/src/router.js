const express = require('express')
const router = express.Router();

const memesRouter = require('./routes/memes.router');

// Sa verific basic
router.get('/', (req, res) => {
    const data = {
        success: true,
        message: 'Tezaur Folcloric Bacau 2007',
        date: new Date().toLocaleString()
    }
    res.status(200).send(data)
})

router.use('/memes', memesRouter);

module.exports = router