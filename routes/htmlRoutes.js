const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view.html'));
});

router.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/add.html'));
});

module.exports = router;
