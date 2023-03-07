const { Schema, model } = require('mongoose');

const CardSchema = new Schema({
   card_id:{
      type: String,
      required: true,
   },
   name:{
      type: String,
   }
});

const card = model('card', CardSchema);

module.exports = card;
