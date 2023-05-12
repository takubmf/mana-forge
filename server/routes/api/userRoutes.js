const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addDeck,
    deleteDeck
} = require('../../controllers/userControl');

router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

router.route('/:userId/decks/:deckId')
    .post(addDeck)
    .delete(deleteDeck)

module.exports = router;