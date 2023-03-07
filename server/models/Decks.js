const { Schema, model } = require('mongoose');
const cardschema = require('./Card')
const DeckSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
 cards:[cardschema.schema],
 format:{
    type: String,
    required: true,
 }
});

const Deck = model('Deck', DeckSchema);

module.exports = Deck;
