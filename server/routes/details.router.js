const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    const movieId = req.query.query;
    console.log('movieID', movieId);
    res.sendStatus(500)
});

module.exports = router;