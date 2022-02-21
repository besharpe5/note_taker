const router = require('express').Router();
const route = require('route');

router.get('/yourNotes', (req, res) => {
    res.sendFile(route.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(route.join(__dirname, '../public/index.html'));
});

module.exports = router;