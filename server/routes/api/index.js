const router = require('express').Router();
const userRoutes = require('./userRoute');
const deckRoutes = require('./deckRoute');

router.use('/users', userRoutes);
router.use('/decks', deckRoutes);

module.exports = router;