const router = require('express').Router();

const {
    getDecks,
    getUserDecks,
    createDeck,
    updateDeck,
    deleteDeck,
    addCard,
    deleteCard
} = require('../../controllers/deckControl');

router
    .route('/')
    .get(getDecks)
    .post(createDeck);

router
    .route('/:deckId')
    .get(getUserDecks)
    .put(updateDeck)
    .delete(deleteDeck)

router.route('/:deckId/cards')
    .post(addCard);

router.route('/:deckId/decks/:deckId')
    .delete(deleteCard);

module.exports = router;