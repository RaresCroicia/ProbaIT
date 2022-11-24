const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    const data = {
        success: true,
        message: 'Tezaur Folcloric Bacau 2007',
        date: new Date().toLocaleString()
    }
    res.status(200).send(data)
})

router.get('/health', (req, res) => {
    const data = {
        uptime: Math.floor(process.uptime()),
        message: "Running",
        date: new Date().toLocaleString()
    }

    res.status(200).send(data);
})

module.exports = router